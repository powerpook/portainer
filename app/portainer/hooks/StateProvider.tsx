import { ReactNode } from 'react';
import { UIRouterContextComponent } from '@uirouter/react-hybrid';

import { UserProvider } from '@/portainer/hooks/useUser';

interface Props {
  children: ReactNode;
}

export function StateProvider({ children }: Props) {
  return (
    <UIRouterContextComponent>
      <UserProvider>{children}</UserProvider>
    </UIRouterContextComponent>
  );
}
