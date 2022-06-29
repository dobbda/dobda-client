import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
type StyleProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};
// popover container style
const PopoverContainer = styled.div<StyleProps>`
  ${(props) => {
    return css`
      z-index: 9999;
      position: absolute;
      top: ${props.top != null ? '100%' : 'auto'};
      bottom: ${props.bottom != null ? "100%" : 'auto'};
      left: ${props.left != null ? props.left + 'px' : 'auto'};
      right: ${props.right != null ? props.right + 'px' : 'auto'};

      min-width: 100px;
      min-height: 100px;

      .top-area{ //
        height:  ${props.top != null ? props.top+"px" : 0};
        width: 100% ;
      }
      .bottom-area{
        height:  ${props.bottom != null ? props.bottom+"px" : 0};
        width: 100% ;
      }
    `;
  }}
`;
// popover container parents element
const Span = styled.span`
  overflow:visible !important;

  position: relative;
`;

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger?: string;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  visible?: boolean; //내용완료시 자동 닫기를 원할시 close로 boolean 전달; true일시 모달close
};

export function Popover({
  children,
  content,
  trigger = 'click',
  visible = false,
  top = null,
  left = null,
  bottom = null,
  right = null,
}: Props) {
  const setUseRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState(false);
  // mouse hover event
  const onMouseOver = () => {
    if (trigger == 'hover') {
      setIsShow(true);
    }
  };
  const onMouseLeave = () => {
    if (trigger == 'hover') {
      setIsShow(false);
    }
  };
  // mouse click event
  const onClickIsShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsShow(true);
  };
  useEffect(() => {
    if(visible){
      setIsShow(true);
    }else{setIsShow(false);}

    const pageClickEvent = (e: any) => {
      if (!setUseRef.current.contains(e.target)) {
        setIsShow(false);
      }
    };

    window.addEventListener('click', pageClickEvent, true);

    return () => {
      window.removeEventListener('click', pageClickEvent, true);
    };
  },[visible,]);

  return (
    <Span onClick={onClickIsShow} ref={setUseRef} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      < >{children}</>
      {isShow && (
        <PopoverContainer top={top} left={left} bottom={bottom} right={right}>
          <div className="top-area"> </div> 
          {content}

          <div className="bottom-area"> </div>

        </PopoverContainer>
      )}
    </Span>
  );
}
