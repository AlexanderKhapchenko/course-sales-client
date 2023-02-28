import cn from 'classnames';
import styles from './paragraph.module.css';
import { ParagraphProps } from '@/components/paragraph/paragraph.props';

export const Paragraph: React.FC<ParagraphProps> = ({ size = 'm', children, ...props }) => {
  return (
    <p
      className={cn(styles.p, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
