import React, { useState } from 'react';

import { Div, Label, CheckBox, ChildMenu, Icon } from './style/Menu.style';
import { Link } from 'src/components/common';
import { ArrowIcon,MainArrowIcon } from 'src/assets/icons';

type Props = {
  children: string;
  icon?: React.ReactNode;
  childMenu?: any;
  childOpen?: boolean;
  href?: string;
};

export const Menu = ({ children, icon, childMenu, href, childOpen = false }: React.PropsWithChildren<Props>) => {
  const [checked, setchecked] = useState(childOpen);
  return (
    <Div checked={checked}>
      {href ? (
        <>
          <Link href={href}>
            <Icon>{icon}</Icon>
          </Link>
        </>
      ) : (
        <Icon>{icon}</Icon>
      )}

      <CheckBox defaultChecked={childOpen} id={childMenu} onChange={(e) => setchecked(!checked)} />
      <Label htmlFor={childMenu}>
        <h1>{children}</h1>
        {childMenu && ( // whether to display the up-down icon or not
          <MainArrowIcon className="rotate" />
        )}
      </Label>

      {childMenu && <ChildMenu>{childMenu}</ChildMenu>}
    </Div>
  );
};
