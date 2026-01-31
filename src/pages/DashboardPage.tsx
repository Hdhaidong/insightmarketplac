import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, LogOut } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAuthContext } from '@/contexts/AuthContext';
import { ROLE_LABELS } from '@/types/auth';
import { InfluencerDashboard } from '@/components/dashboard/InfluencerDashboard';
import { SellerDashboard } from '@/components/dashboard/SellerDashboard';
import { BrandDashboard } from '@/components/dashboard/BrandDashboard';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';

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

  const renderDashboard = () => {
    switch (role) {
      case 'influencer':
        return <InfluencerDashboard />;
      case 'seller':
        return <SellerDashboard />;
      case 'brand':
        return <BrandDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return null;
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage src={profile?.avatar_url || undefined} />
                <AvatarFallback className="text-xl">
                  {profile?.display_name?.[0] || user.email?.[0]?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  欢迎回来，{profile?.display_name || user.email?.split('@')[0]}
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary">
                    {roleInfo.icon} {roleInfo.zh}
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              退出登录
            </Button>
          </div>

          {/* Profile Card (Collapsed) */}
          <Card className="mb-8">
            <CardHeader className="py-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base">
                  <User className="h-4 w-4" />
                  账户信息
                </CardTitle>
                <Button variant="ghost" size="sm">
                  编辑资料
                </Button>
              </div>
            </CardHeader>
            <CardContent className="py-0 pb-4">
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">邮箱：</span>
                  <span>{user.email}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">用户名：</span>
                  <span>{profile?.username || '未设置'}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">手机：</span>
                  <span>{profile?.phone || '未设置'}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Role-specific Dashboard */}
          {renderDashboard()}
        </motion.div>
      </div>
    </PageLayout>
  );
}
