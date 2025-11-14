'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, Building2, MapPin, Phone, Printer, Mail, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ContactInfo {
  id: number;
  organizationKo: string;
  organizationEn: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
}

export default function AdminContactPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState<ContactInfo>({
    id: 1,
    organizationKo: '',
    organizationEn: '',
    address: '',
    phone: '',
    fax: '',
    email: '',
  });

  // 연락처 정보 불러오기
  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading contact info:', error);
        setLoading(false);
      });
  }, []);

  // 폼 제출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('✅ 연락처 정보가 성공적으로 저장되었습니다!');
        setSaved(true);
      } else {
        setMessage('❌ 저장에 실패했습니다. 다시 시도해주세요.');
        setSaved(false);
      }
    } catch (error) {
      console.error('Error saving contact info:', error);
      setMessage('❌ 저장 중 오류가 발생했습니다.');
    } finally {
      setSaving(false);
    }
  };

  // 입력 필드 변경
  const handleChange = (field: keyof ContactInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="container max-w-4xl py-10">
        <p>로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-10">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          홈으로 돌아가기
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">연락처 정보 관리</CardTitle>
          <CardDescription>
            홈페이지 하단에 표시될 사무국 연락처 정보를 수정할 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 조직명 (한글) */}
            <div className="space-y-2">
              <Label htmlFor="organizationKo">조직명 (한글)</Label>
              <Input
                id="organizationKo"
                value={formData.organizationKo}
                onChange={(e) => handleChange('organizationKo', e.target.value)}
                placeholder="한국저시력인협회"
                required
              />
            </div>

            {/* 조직명 (영문) */}
            <div className="space-y-2">
              <Label htmlFor="organizationEn">조직명 (영문)</Label>
              <Input
                id="organizationEn"
                value={formData.organizationEn}
                onChange={(e) => handleChange('organizationEn', e.target.value)}
                placeholder="Korea Low Vision Association"
                required
              />
            </div>

            {/* 주소 */}
            <div className="space-y-2">
              <Label htmlFor="address">주소</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="서울특별시 영등포구 영신로 136 김안과병동 망막병원 지하1층"
                required
              />
            </div>

            {/* 전화번호 */}
            <div className="space-y-2">
              <Label htmlFor="phone">전화번호</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="(02)-2677-4662"
                required
              />
            </div>

            {/* 팩스번호 */}
            <div className="space-y-2">
              <Label htmlFor="fax">팩스번호</Label>
              <Input
                id="fax"
                type="tel"
                value={formData.fax}
                onChange={(e) => handleChange('fax', e.target.value)}
                placeholder="(02)-2677-4665"
                required
              />
            </div>

            {/* 이메일 */}
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="lowvision@korea.com"
                required
              />
            </div>

            {/* 메시지 표시 */}
            {message && (
              <div className={`p-4 rounded-lg ${message.includes('✅') ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400'}`}>
                {message}
              </div>
            )}

            {/* 저장 버튼 */}
            <Button type="submit" disabled={saving} className="w-full">
              <Save className="h-4 w-4 mr-2" />
              {saving ? '저장 중...' : '저장'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* 저장된 정보 표시 */}
      {saved && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              저장된 연락처 정보
            </CardTitle>
            <CardDescription>
              홈페이지 Footer에 다음 정보가 표시됩니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-semibold">{formData.organizationKo}</p>
                  <p className="text-sm text-muted-foreground">{formData.organizationEn}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">주소</p>
                  <p className="text-sm">{formData.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">전화</p>
                  <p className="text-sm">{formData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Printer className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">팩스</p>
                  <p className="text-sm">{formData.fax}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">이메일</p>
                  <p className="text-sm">{formData.email}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
