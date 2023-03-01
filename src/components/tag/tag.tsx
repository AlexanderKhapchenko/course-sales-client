import cn from 'classnames';
import styles from './tag.module.css';
import { TagProps } from '@/components/tag/tag.props';

export const Tag: React.FC<TagProps> = ({ size = 's', color = 'ghost', href, children, className, ...props }) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
