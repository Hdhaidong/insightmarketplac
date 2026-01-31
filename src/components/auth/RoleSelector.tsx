import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ROLE_LABELS, SELECTABLE_ROLES, type AppRole } from '@/types/auth';

interface RoleSelectorProps {
  value: AppRole;
  onChange: (role: AppRole) => void;
  disabled?: boolean;
}

export function RoleSelector({ value, onChange, disabled }: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {SELECTABLE_ROLES.map((role) => {
        const { zh, icon, description } = ROLE_LABELS[role];
        const isSelected = value === role;

        return (
          <motion.button
            key={role}
            type="button"
            disabled={disabled}
            onClick={() => onChange(role)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'relative p-4 rounded-xl border-2 text-left transition-all duration-200',
              'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              isSelected
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-border bg-card hover:border-primary/30',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {isSelected && (
              <motion.div
                layoutId="role-indicator"
                className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary"
              />
            )}
            <div className="text-2xl mb-2">{icon}</div>
            <div className="font-semibold text-foreground">{zh}</div>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {description}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
}
