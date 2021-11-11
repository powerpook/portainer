import { ReactNode } from 'react';
import { UISref, UISrefProps } from '@uirouter/react';

interface Props {
  children: ReactNode;
  title?: string;
}

export function Link({ children, title, ...props }: Props & UISrefProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <UISref {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a title={title}>{children}</a>
    </UISref>
  );
}
