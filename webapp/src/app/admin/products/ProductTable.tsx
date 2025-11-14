'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ProductForm } from './ProductForm';

interface Product {
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
  createdAt: Date;
  updatedAt: Date;
}

interface ProductTableProps {
  initialProducts: Product[];
}

export function ProductTable({ initialProducts }: ProductTableProps) {
  const [products, setProducts] = useState(initialProducts);
  const [formOpen, setFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`"${name}" 제품을 삭제하시겠습니까?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      await fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('제품 삭제 중 오류가 발생했습니다.');
    }
  };

  const handleTogglePublish = async (product: Product) => {
    try {
      const response = await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          publishedAt: product.publishedAt ? null : new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      await fetchProducts();
    } catch (error) {
      console.error('Error toggling publish:', error);
      alert('공개 상태 변경 중 오류가 발생했습니다.');
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    setEditingProduct(null);
  };

  const formatPrice = (price: number | null) => {
    if (price === null) return '미정';
    return `${price.toLocaleString()}원`;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('ko-KR');
  };

  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">보조공학 제품 관리</h2>
        <Button onClick={() => setFormOpen(true)}>
          새 제품 추가
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>제품명</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead>제조사</TableHead>
              <TableHead>가격</TableHead>
              <TableHead>등록일</TableHead>
              <TableHead className="text-right">관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  등록된 제품이 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    {product.publishedAt ? (
                      <Badge variant="default">공개</Badge>
                    ) : (
                      <Badge variant="secondary">비공개</Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.manufacturer}</TableCell>
                  <TableCell>{formatPrice(product.price)}</TableCell>
                  <TableCell>{formatDate(product.createdAt)}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleTogglePublish(product)}
                    >
                      {product.publishedAt ? '비공개' : '공개'}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(product)}
                    >
                      수정
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(product.id, product.name)}
                    >
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <ProductForm
        open={formOpen}
        onOpenChange={handleFormClose}
        onSuccess={fetchProducts}
        editProduct={editingProduct}
      />
    </>
  );
}
