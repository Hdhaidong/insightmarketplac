export type AppRole = 'influencer' | 'seller' | 'brand' | 'admin';

export interface UserProfile {
  id: string;
  user_id: string;
  username: string | null;
  display_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserRole {
  id: string;
  user_id: string;
  role: AppRole;
  created_at: string;
}

export const ROLE_LABELS: Record<AppRole, { zh: string; en: string; icon: string; description: string }> = {
  influencer: {
    zh: '网红达人',
    en: 'Influencer',
    icon: '🎬',
    description: '内容创作者，通过社交媒体推广产品'
  },
  seller: {
    zh: '卖家',
    en: 'Seller',
    icon: '🏪',
    description: '在电商平台销售产品的商家'
  },
  brand: {
    zh: '品牌方',
    en: 'Brand',
    icon: '🏢',
    description: '拥有品牌产品，寻求渠道拓展'
  },
  admin: {
    zh: '管理员',
    en: 'Admin',
    icon: '⚙️',
    description: '平台管理和运营'
  }
};

export const SELECTABLE_ROLES: AppRole[] = ['influencer', 'seller', 'brand'];
