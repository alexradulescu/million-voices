'use client';

import { SideNav } from '@lobehub/ui';
import { memo } from 'react';

import { BullishLogo } from '@/components/BullishLogo';
import { useActiveTabKey } from '@/hooks/useActiveTabKey';

import BottomActions from './BottomActions';
import TopActions from './TopActions';

const Nav = memo(() => {
  const sidebarKey = useActiveTabKey();
  return (
    <SideNav
      avatar={<BullishLogo />}
      bottomActions={<BottomActions />}
      style={{ height: '100%', zIndex: 100 }}
      topActions={<TopActions tab={sidebarKey} />}
    />
  );
});

Nav.displayName = 'DesktopNav';

export default Nav;
