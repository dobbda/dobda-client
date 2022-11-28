import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled, { css, CSSProp, keyframes } from 'styled-components';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger?: 'click' | 'hover';
  outClick?: boolean;
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
  outClick = true,
  visible = false,
  top = null,
  left = null,
  bottom = null,
  right = null,
}: Props) {
  const setUseRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState(false);
  // mouse hover event
  const onMouseOver = useCallback(() => {
    if (trigger == 'hover') {
      setIsShow(true);
    }
  }, [trigger]);

  const onMouseLeave = useCallback(() => {
    if (trigger == 'hover') {
      setIsShow(false);
    }
  }, [trigger]);

  // mouse click event
  const onClickIsShow = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsShow(!isShow);
    },
    [isShow],
  );

  const pageClickEvent = useCallback((e: any) => {
    if (!setUseRef.current.contains(e.target)) {
      setIsShow(false);
    }
    if (isShow && e.target == children) {
      setIsShow(false);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }

    outClick && window.addEventListener('click', pageClickEvent, true);

    return () => {
      window.removeEventListener('click', pageClickEvent, true);
    };
  }, [visible, outClick, pageClickEvent]);
  return (
    <Span ref={setUseRef} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <span onClick={onClickIsShow} className="event_click_target">
        {children}
      </span>
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
      bottom: ${props.bottom != null ? '100%' : 'auto'};
      left: ${props.left != null ? props.left + 'px' : 'auto'};
      right: ${props.right != null ? props.right + 'px' : 'auto'};
      animation: ${boxFade} 0.25s ease-in-out;
      .top-area {
        //
        height: ${props.top != null ? props.top + 'px' : 0};
        width: 100%;
      }
      .bottom-area {
        height: ${props.bottom != null ? props.bottom + 'px' : 0};
        width: 100%;
      }
      .event_click_target {
        height: 100%;
        width: fit-content;
      }
    `;
  }}
`;
// popover container parents element
const Span = styled.span`
  overflow: visible !important;

  position: relative;
`;

const boxFade = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

`;
