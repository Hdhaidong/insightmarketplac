import { motion } from 'framer-motion';
import { Store, Package, ShoppingCart, TrendingUp, DollarSign, BarChart3, Truck, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

export function SellerDashboard() {
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
                  <p className="text-sm text-muted-foreground">今日销售</p>
                  <p className="text-2xl font-bold">$0.00</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">待处理订单</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">在售商品</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <Package className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">本月增长</p>
                  <p className="text-2xl font-bold">0%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    最新订单
                  </CardTitle>
                  <CardDescription>查看和处理客户订单</CardDescription>
                </div>
                <Button size="sm">查看全部</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>暂无订单</p>
                <p className="text-sm mt-2">上架商品后，订单将显示在这里</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Store Status */}
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                店铺状态
              </CardTitle>
              <CardDescription>您的店铺健康度</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">店铺评分</span>
                <Badge variant="secondary">暂无评分</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">发货时效</span>
                <Badge variant="secondary">--</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">客户满意度</span>
                <Badge variant="secondary">--</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">退货率</span>
                <Badge variant="secondary">--</Badge>
              </div>
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
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">商品管理</h3>
                  <p className="text-sm text-muted-foreground">上架和管理商品</p>
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
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">物流管理</h3>
                  <p className="text-sm text-muted-foreground">发货和物流跟踪</p>
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
                  <h3 className="font-semibold">数据分析</h3>
                  <p className="text-sm text-muted-foreground">销售数据报表</p>
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
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">客服消息</h3>
                  <p className="text-sm text-muted-foreground">处理客户咨询</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
