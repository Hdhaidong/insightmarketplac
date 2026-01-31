import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Target, Megaphone, FileText, Handshake, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function BrandDashboard() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">合作达人</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">进行中活动</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <Megaphone className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">总曝光量</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">转化率</p>
                  <p className="text-2xl font-bold">0%</p>
                </div>
                <Target className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Campaigns */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Megaphone className="h-5 w-5" />
                    推广活动
                  </CardTitle>
                  <CardDescription>创建和管理品牌推广活动</CardDescription>
                </div>
                <Button size="sm">创建活动</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <Megaphone className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>暂无推广活动</p>
                <p className="text-sm mt-2">创建推广活动，匹配优质达人</p>
                <Button className="mt-4" variant="outline">
                  创建首个活动
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Brand Profile */}
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                品牌档案
              </CardTitle>
              <CardDescription>完善品牌信息提高匹配度</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>资料完整度</span>
                  <span>20%</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span className="text-muted-foreground">品牌介绍</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span className="text-muted-foreground">产品类目</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span className="text-muted-foreground">目标受众</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span className="text-muted-foreground">合作偏好</span>
                </div>
              </div>
              <Button className="w-full" variant="outline" size="sm">
                完善资料
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div variants={itemVariants}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">达人库</h3>
                  <p className="text-sm text-muted-foreground">浏览合作达人</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">合作管理</h3>
                  <p className="text-sm text-muted-foreground">管理合作关系</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">数据报告</h3>
                  <p className="text-sm text-muted-foreground">推广效果分析</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">合同文档</h3>
                  <p className="text-sm text-muted-foreground">合作协议管理</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
