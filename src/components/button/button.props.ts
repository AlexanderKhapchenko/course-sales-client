import { ReactNode } from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down';
}
