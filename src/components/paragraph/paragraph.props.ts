import { ReactNode } from 'react';

export interface ParagraphProps extends React.ComponentPropsWithoutRef<'p'> {
  size?: 's' | 'm' | 'l';
  children: ReactNode;
}
