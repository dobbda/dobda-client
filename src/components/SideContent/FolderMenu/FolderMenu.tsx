import React, { useEffect, useState } from 'react';
import { Div, Label, CheckBox, ChildMenu, Icon } from './style/Menu.style';
import { MainArrowi } from 'src/icons';

type Props = {
  title: React.ReactNode;
  icon?: React.ReactNode /**title icon */;
  children?: React.ReactNode;
  childOpen?: boolean;
  href?: string;
  bg?: string;
  color?: string;
  height?: string;
};

export const FolderMenu = ({
  color,
  title,
  icon,
  children,
  childOpen = false,
  bg,
  href,
  height = '150px',
}: React.PropsWithChildren<Props>) => {
  const [checked, setchecked] = useState(childOpen);
  const [checkId, setcheckId] = useState('');
  useEffect(() => {
    setcheckId(Math.random().toString(36).substring(3, 10));
  }, []);

  return (
    <Div checked={checked} bg={bg}>
      <CheckBox height={height} defaultChecked={childOpen} id={checkId} onChange={(e) => setchecked(!checked)} />
      <Label htmlFor={checkId} color={color}>
        {icon && <Icon>{icon}</Icon>}
        <h1>{title}</h1>
        <MainArrowi className="rotate" color={color} />
      </Label>
      <ChildMenu>{children}</ChildMenu>
    </Div>
  );
};
