import Link from 'next/link';
import React from 'react';

import { Div, Label, CheckBox, ChildMenu, Icon } from './style/Menu.Elelemnt';
import UpIcon from 'src/assets/icon/upDown.svg';
type Props = {
  children: string;
  icon?: React.ReactNode;
  childMenu?: any;
};

export const Menu = ({ children, icon, childMenu }: Props) => {
  return (
    <Div>
      <Icon>{icon}</Icon>

      <CheckBox defaultChecked={false} id={childMenu} />
      <Label htmlFor={childMenu}>
        <h3>{children}</h3>
        {childMenu && ( // whether to display the up-down icon or not
          <UpIcon className="rotate" />
        )}
      </Label>

      {childMenu && <ChildMenu >{childMenu}</ChildMenu>}
    </Div>
  );
};
