#!/bin/bash

# Product URLs to check
urls=(
  "https://www.letsenvision.com/"
  "https://www.ray-ban.com/usa/discover-ray-ban-meta-smart-glasses"
  "https://www.biped.ai/"
  "https://www.orcam.com/"
  "https://wewalk.io/"
  "https://www.blindshell.com/"
  "https://www.kapsys.com/"
  "https://www.freedomscientific.com/products/lowvision/topaz/"
  "https://www.enhancedvision.com/low-vision-product-line/acrobat-hd.html"
  "https://www.optelec.com/pebble-hd"
  "https://aira.io/"
  "https://www.orcam.com/orcam-read/"
  "https://www.humanware.com/en-usa/products/blindness/braillenote-touch"
)

echo "Checking product website URLs..."
echo "================================"

for url in "${urls[@]}"; do
  echo -n "Checking: $url ... "

  # Check if URL is accessible
  if curl -s -I -L --max-time 10 "$url" 2>/dev/null | head -1 | grep -q "200\|301\|302\|303\|307\|308"; then
    echo "✓ OK"
  else
    # Try alternative check
    status_code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "$url" 2>/dev/null)
    if [ "$status_code" = "200" ] || [ "$status_code" = "301" ] || [ "$status_code" = "302" ]; then
      echo "✓ OK (Status: $status_code)"
    else
      echo "✗ Error (Status: $status_code)"
    fi
  fi
done

echo "================================"
echo "URL check complete!"