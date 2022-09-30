import React, { useEffect, useState } from 'react';

import { Div, Label, CheckBox, ChildMenu, Icon } from './style/Menu.style';
import { Link } from 'src/components/common';
import { ArrowIcon, MainArrowIcon } from 'src/icons';

type Props = {
  title: any;
  icon?: React.ReactNode /**title icon */;
  children?: React.ReactNode;
  childOpen?: boolean;
  href?: string;
};

export const FolderMenu = ({ title, icon, children, childOpen = false }: React.PropsWithChildren<Props>) => {
  const [checked, setchecked] = useState(childOpen);
  const [checkId, setcheckId] = useState('');
  useEffect(() => {
    setcheckId(Math.random().toString(36).substring(3, 10));
  }, []);

  return (
    <Div checked={checked}>
      <CheckBox defaultChecked={childOpen} id={checkId} onChange={(e) => setchecked(!checked)} />
      <Label htmlFor={checkId}>
        {icon && <Icon>{icon}</Icon>}
        <h1>{title}</h1>
        <MainArrowIcon className="rotate" />
      </Label>
      <ChildMenu>{children}</ChildMenu>
    </Div>
  );
};
