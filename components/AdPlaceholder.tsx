'use client';

interface AdPlaceholderProps {
  variant: 'banner' | 'sidebar' | 'in-feed';
  className?: string;
}

const dimensions = {
  banner: { width: '728px', height: '90px', label: 'Advertisement (728×90)' },
  sidebar: { width: '300px', height: '250px', label: 'Advertisement (300×250)' },
  'in-feed': { width: '100%', height: '100px', label: 'Advertisement' },
};

export default function AdPlaceholder({ variant, className = '' }: AdPlaceholderProps) {
  const { height, label } = dimensions[variant];

  return (
    <div
      className={`flex items-center justify-center border border-dashed border-surface-600/50 rounded-xl bg-surface-800/30 text-slate-600 text-xs ${className}`}
      style={{ minHeight: height }}
      data-ad-slot={variant}
      data-ad-format={variant === 'in-feed' ? 'fluid' : 'auto'}
    >
      <span>{label}</span>
    </div>
  );
}
