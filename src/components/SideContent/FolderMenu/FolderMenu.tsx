import React, { useState } from 'react';

import { Div, Label, CheckBox, ChildMenu, Icon } from './style/Menu.style';
import { Link } from 'src/components/common';
import { ArrowIcon, MainArrowIcon } from 'src/assets/icons';

type Props = {
  title: any;
  icon?: React.ReactNode /**title icon */;
  children?: React.ReactNode;
  childOpen?: boolean;
  href?: string;
};

export const FolderMenu = ({ title, icon, children, childOpen = false }: React.PropsWithChildren<Props>) => {
  const [checked, setchecked] = useState(childOpen);
  return (
    <Div checked={checked}>
      <CheckBox defaultChecked={childOpen} id={title} onChange={(e) => setchecked(!checked)} />
      <Label htmlFor={title}>
        {icon && <Icon>{icon}</Icon>}
        <h1>{title}</h1>
        <MainArrowIcon className="rotate" />
      </Label>
      <ChildMenu>{children}</ChildMenu>
    </Div>
  );
};
