import React from 'react';

import { Div, Label, CheckBox, ChildMenu, Icon } from './style/Menu.Elelemnt';
import { Link } from 'src/components/common';
import UpIcon from 'src/assets/icon/upDown.svg';
import {ArowIcon} from 'src/assets/icons';

type Props = {
  children: string;
  icon?: React.ReactNode;
  childMenu?: any;
  childOpen?: boolean;
  href?: string;
};

export const Menu = (
	{ children, icon, childMenu, href,childOpen=false }: 
	React.PropsWithChildren<Props>) => {
  return (
    <Div>
      <Link href={href ? href : ''}>
        <Icon>{icon}</Icon>
      </Link>

      <CheckBox defaultChecked={childOpen} id={childMenu} />
      <Label htmlFor={childMenu}>
        <h1>{children}</h1>
        {childMenu && ( // whether to display the up-down icon or not
          <ArowIcon  className="rotate" />
        )}
      </Label>

      {childMenu && <ChildMenu>{childMenu}</ChildMenu>}
    </Div>
  );
};
