import React, { useEffect, useState } from 'react';

import { Div, Label, CheckBox, ChildMenu, Icon } from './style/Menu.style';
import { Link } from 'src/components/common';
import { i } from 'src/icons';

type Props = {
  title: React.ReactNode;
  icon?: React.ReactNode /**title icon */;
  children?: React.ReactNode;
  childOpen?: boolean;
  href?: string;
  bg?: string;
  color?: string;
};

export const FolderMenu = ({ color, title, icon, children, childOpen = false, bg, href }: React.PropsWithChildren<Props>) => {
  const [checked, setchecked] = useState(childOpen);
  const [checkId, setcheckId] = useState('');
  useEffect(() => {
    setcheckId(Math.random().toString(36).substring(3, 10));
  }, []);

  return (
    <Div checked={checked} bg={bg}>
      <CheckBox defaultChecked={childOpen} id={checkId} onChange={(e) => setchecked(!checked)} />
      <Label htmlFor={checkId} color={color}>
        {icon && <Icon>{icon}</Icon>}
        <h1>{title}</h1>
        <i.MainArrow className="rotate" color={color} />
      </Label>
      <ChildMenu>{children}</ChildMenu>
    </Div>
  );
};
