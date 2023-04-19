import { HeaderProps } from '@/layout/header/header.props';

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return <div {...props}>Header</div>;
};
