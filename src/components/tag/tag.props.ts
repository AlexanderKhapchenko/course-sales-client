import { ReactNode } from 'react';

export interface TagProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
}
