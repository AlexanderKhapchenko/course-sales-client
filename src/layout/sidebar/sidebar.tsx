import { SidebarProps } from '@/layout/sidebar/sidebar.props';

export const Sidebar: React.FC<SidebarProps> = ({ ...props }) => {
  return <div {...props}>Sidebar</div>;
};
