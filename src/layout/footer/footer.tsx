import cn from 'classnames';
import { format } from 'date-fns';
import styles from './footer.module.css';
import { FooterProps } from '@/layout/footer/footer.props';

export const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>CourseSales © 2022 - {currentYear} All rights reserved</div>
      <a href="#" target="_blank">
        User Agreement
      </a>
      <a href="#" target="_blank">
        Privacy Policy
      </a>
    </footer>
  );
};
