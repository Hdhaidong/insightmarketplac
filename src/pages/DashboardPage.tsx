import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Settings, LogOut } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAuthContext } from '@/contexts/AuthContext';
import { ROLE_LABELS } from '@/types/auth';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, profile, role, loading, initialized, signOut, isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (initialized && !isAuthenticated) {
      navigate('/auth/login');
    }
  }, [initialized, isAuthenticated, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading || !initialized) {
    return (
      <PageLayout>
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </PageLayout>
    );
  }

  if (!user || !role) {
    return null;
  }

  const roleInfo = ROLE_LABELS[role];

  return (
    <PageLayout>
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">控制台</h1>
              <p className="text-muted-foreground mt-1">
                欢迎回来，{profile?.display_name || user.email}
              </p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              退出登录
            </Button>
          </div>

          {/* Profile Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                账户信息
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={profile?.avatar_url || undefined} />
                  <AvatarFallback className="text-2xl">
                    {profile?.display_name?.[0] || user.email?.[0]?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">名称</p>
                    <p className="font-medium">{profile?.display_name || '未设置'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">邮箱</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">身份</p>
                    <Badge className="mt-1">
                      {roleInfo.icon} {roleInfo.zh}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Role-specific content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {role === 'influencer' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>🎬 我的推广</CardTitle>
                    <CardDescription>查看和管理您的推广活动</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">功能开发中...</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>📊 数据分析</CardTitle>
                    <CardDescription>查看推广效果和收益</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">功能开发中...</p>
                  </CardContent>
                </Card>
              </>
            )}

            {role === 'seller' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>🏪 我的店铺</CardTitle>
                    <CardDescription>管理您的电商店铺</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">功能开发中...</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>📦 订单管理</CardTitle>
                    <CardDescription>查看和处理订单</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">功能开发中...</p>
                  </CardContent>
                </Card>
              </>
            )}

            {role === 'brand' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>🏢 品牌管理</CardTitle>
                    <CardDescription>管理您的品牌信息</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">功能开发中...</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>🤝 合作伙伴</CardTitle>
                    <CardDescription>查看和管理合作关系</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">功能开发中...</p>
                  </CardContent>
                </Card>
              </>
            )}

            {role === 'admin' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>👥 用户管理</CardTitle>
                    <CardDescription>管理平台用户</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">功能开发中...</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>⚙️ 系统设置</CardTitle>
                    <CardDescription>配置平台设置</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">功能开发中...</p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
