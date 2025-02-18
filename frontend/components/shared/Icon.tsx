import {
  ClipboardDocumentIcon,
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline';

type IconName = 'clipboard' | 'chart' | 'chart-bar' | 'users' | 'cog';

interface IconProps {
  name: IconName;
  className?: string;
}

const iconComponents = {
  'clipboard': ClipboardDocumentIcon,
  'chart': ChartPieIcon,
  'chart-bar': ChartBarIcon,
  'users': UsersIcon,
  'cog': CogIcon,
};

const Icon: React.FC<IconProps> = ({ name, className = "w-5 h-5" }) => {
  const IconComponent = iconComponents[name];
  if (!IconComponent) return null;
  
  return <IconComponent className={className} />;
};

export default Icon; 