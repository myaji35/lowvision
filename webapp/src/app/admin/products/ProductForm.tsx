'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AssistiveProductInput } from '@/types';

interface ProductFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  editProduct?: {
    id: string;
    name: string;
    category: string;
    manufacturer: string;
    price: number | null;
    description: string;
    features: string;
    imageUrl: string | null;
    purchaseUrl: string | null;
    publishedAt: Date | null;
  } | null;
}

const CATEGORIES = [
  'AI 안경',
  '웨어러블',
  '스마트 지팡이',
  '스마트폰',
  '비디오 확대기',
  '기타',
];

export function ProductForm({ open, onOpenChange, onSuccess, editProduct }: ProductFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: editProduct?.name || '',
    category: editProduct?.category || CATEGORIES[0],
    manufacturer: editProduct?.manufacturer || '',
    price: editProduct?.price?.toString() || '',
    description: editProduct?.description || '',
    features: editProduct?.features ? JSON.parse(editProduct.features).join('\n') : '',
    imageUrl: editProduct?.imageUrl || '',
    purchaseUrl: editProduct?.purchaseUrl || '',
    published: !!editProduct?.publishedAt,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const featuresArray = formData.features
        .split('\n')
        .map((f: string) => f.trim())
        .filter((f: string) => f.length > 0);

      const payload: AssistiveProductInput = {
        name: formData.name,
        category: formData.category,
        manufacturer: formData.manufacturer,
        price: formData.price ? parseInt(formData.price) : null,
        description: formData.description,
        features: featuresArray,
        imageUrl: formData.imageUrl || null,
        purchaseUrl: formData.purchaseUrl || null,
        publishedAt: formData.published ? new Date().toISOString() : null,
      };

      const url = editProduct
        ? `/api/products/${editProduct.id}`
        : '/api/products';
      const method = editProduct ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to save product');
      }

      onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving product:', error);
      alert('제품 저장 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editProduct ? '제품 수정' : '새 제품 추가'}
          </DialogTitle>
          <DialogDescription>
            보조공학 제품 정보를 입력하세요. 필수 항목은 * 로 표시됩니다.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">제품명 *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">카테고리 *</Label>
            <select
              id="category"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="manufacturer">제조사 *</Label>
            <Input
              id="manufacturer"
              required
              value={formData.manufacturer}
              onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">가격 (원)</Label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="미정인 경우 비워두세요"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">제품 설명 *</Label>
            <Textarea
              id="description"
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="features">주요 기능 (한 줄에 하나씩)</Label>
            <Textarea
              id="features"
              rows={5}
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              placeholder="AI 기반 물체 인식&#10;실시간 텍스트 읽기&#10;얼굴 인식"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">이미지 URL</Label>
            <Input
              id="imageUrl"
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purchaseUrl">구매 링크</Label>
            <Input
              id="purchaseUrl"
              type="url"
              value={formData.purchaseUrl}
              onChange={(e) => setFormData({ ...formData, purchaseUrl: e.target.value })}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
            />
            <Label htmlFor="published">공개</Label>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              취소
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? '저장 중...' : editProduct ? '수정' : '추가'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
