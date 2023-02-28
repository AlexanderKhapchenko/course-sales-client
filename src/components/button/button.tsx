import cn from 'classnames';
import { ButtonProps } from './button.props';
import styles from './button.module.css';
import ArrowIcon from '@/assets/button/arrow.svg';

export const Button: React.FC<ButtonProps> = ({ appearance, children, arrow, className, ...props }) => {
  return (
    <button
      type="button"
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
