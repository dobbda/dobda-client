import React, { useState } from 'react';

import { Div, Label, CheckBox, ChildMenu, Icon } from './style/Menu.style';
import { Link } from 'src/components/common';
import { ArrowIcon, MainArrowIcon } from 'src/assets/icons';

type Props = {
  children: any;
  icon?: React.ReactNode;
  childMenu?: React.ReactNode;
  childOpen?: boolean;
  href?: string;
};

export const FolderMenu = ({ children, icon, childMenu, href, childOpen = false }: React.PropsWithChildren<Props>) => {
  const [checked, setchecked] = useState(childOpen);
  return (
    <Div checked={checked}>
      {/* {Icon && href ? (
        <>
          <Link href={href}>
            <Icon>{icon}</Icon>
          </Link>
        </>
      ) : (
        <Icon>{icon}</Icon>
      )} */}

      <CheckBox defaultChecked={childOpen} id={children} onChange={(e) => setchecked(!checked)} />
      <Label htmlFor={children}>
        {icon && <Icon>{icon}</Icon>}
        <h1>{children}</h1>
        {childMenu && ( // whether to display the up-down icon or not
          <MainArrowIcon className="rotate" />
        )}
      </Label>

      {childMenu && <ChildMenu>{childMenu}</ChildMenu>}
    </Div>
  );
};
