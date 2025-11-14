import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, ShoppingBag, ArrowLeft, Settings, Users, Database } from 'lucide-react';

export default function AdminPage() {
  const adminMenus = [
    {
      title: '연락처 정보 관리',
      description: '사무국 연락처 정보를 수정할 수 있습니다',
      href: '/admin/contact',
      icon: Building2,
      color: 'text-blue-600',
    },
    {
      title: '보조기기 관리',
      description: '보조기기 제품 정보를 등록하고 관리합니다',
      href: '/admin/products',
      icon: ShoppingBag,
      color: 'text-green-600',
    },
  ];

  return (
    <div className="container max-w-6xl py-10">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          홈으로 돌아가기
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Settings className="h-8 w-8" />
          관리자 대시보드
        </h1>
        <p className="mt-2 text-muted-foreground">
          웹사이트 콘텐츠와 설정을 관리할 수 있습니다.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adminMenus.map((menu) => {
          const Icon = menu.icon;
          return (
            <Card key={menu.href} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon className={`h-6 w-6 ${menu.color}`} />
                  {menu.title}
                </CardTitle>
                <CardDescription>{menu.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={menu.href}>
                  <Button className="w-full" variant="default">
                    관리하기
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}

        {/* 추가 예정 메뉴들 */}
        <Card className="opacity-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-6 w-6 text-purple-600" />
              회원 관리
            </CardTitle>
            <CardDescription>회원 정보를 관리합니다 (준비중)</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline" disabled>
              준비중
            </Button>
          </CardContent>
        </Card>

        <Card className="opacity-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Database className="h-6 w-6 text-orange-600" />
              콘텐츠 관리
            </CardTitle>
            <CardDescription>페이지 콘텐츠를 관리합니다 (준비중)</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline" disabled>
              준비중
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-lg font-semibold mb-2">관리자 안내</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• 연락처 정보는 홈페이지 하단(Footer)에 표시됩니다</li>
          <li>• 보조기기 제품은 일상생활 &gt; 보조공학 페이지에 표시됩니다</li>
          <li>• 변경사항은 즉시 웹사이트에 반영됩니다</li>
        </ul>
      </div>
    </div>
  );
}