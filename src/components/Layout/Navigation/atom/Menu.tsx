import React from 'react';

import { Div, Label, CheckBox, ChildMenu, Icon } from './style/Menu.Elelemnt';
import { Link } from 'src/components/common';
import UpIcon from 'src/assets/icon/upDown.svg';
type Props = {
  children: string;
  icon?: React.ReactNode;
  childMenu?: any;
  childOpen?: boolean;
  href?: string;
};

export const Menu = ({ children, icon, childMenu, href,childOpen=false }: React.PropsWithChildren<Props>) => {
  return (
    <Div>
      <Link href={href ? href : ''}>
        <Icon>{icon}</Icon>
      </Link>

      <CheckBox defaultChecked={childOpen} id={childMenu} />
      <Label htmlFor={childMenu}>
        <h3>{children}</h3>
        {childMenu && ( // whether to display the up-down icon or not
          <UpIcon className="rotate" />
        )}
      </Label>

      {childMenu && <ChildMenu>{childMenu}</ChildMenu>}
    </Div>
  );
};
