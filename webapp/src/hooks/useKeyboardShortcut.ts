import { useEffect } from 'react';

type KeyboardShortcutHandler = (event: KeyboardEvent) => void;

interface ShortcutConfig {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  meta?: boolean;
}

/**
 * Keyboard Shortcut Hook
 *
 * Usage:
 * useKeyboardShortcut({ key: 's', ctrl: true }, handleSave);
 * useKeyboardShortcut({ key: 'Escape' }, handleClose);
 */
export function useKeyboardShortcut(
  config: ShortcutConfig,
  handler: KeyboardShortcutHandler,
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const {
        key,
        ctrl = false,
        shift = false,
        alt = false,
        meta = false,
      } = config;

      const matchesKey = event.key === key;
      const matchesCtrl = ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey;
      const matchesShift = shift ? event.shiftKey : !event.shiftKey;
      const matchesAlt = alt ? event.altKey : !event.altKey;
      const matchesMeta = meta ? event.metaKey : !event.metaKey;

      if (matchesKey && matchesCtrl && matchesShift && matchesAlt && matchesMeta) {
        event.preventDefault();
        handler(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [config, handler, enabled]);
}

/**
 * Multiple Keyboard Shortcuts Hook
 *
 * Usage:
 * useKeyboardShortcuts({
 *   'ctrl+s': handleSave,
 *   'Escape': handleClose,
 * });
 */
export function useKeyboardShortcuts(
  shortcuts: Record<string, KeyboardShortcutHandler>,
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = [
        event.ctrlKey || event.metaKey ? 'ctrl' : '',
        event.shiftKey ? 'shift' : '',
        event.altKey ? 'alt' : '',
        event.key.toLowerCase(),
      ]
        .filter(Boolean)
        .join('+');

      const handler = shortcuts[key] || shortcuts[event.key];

      if (handler) {
        event.preventDefault();
        handler(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcuts, enabled]);
}
