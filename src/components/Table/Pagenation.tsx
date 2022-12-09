import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  nextPage?: (num?: number) => Promise<void>;
  result?: any[];
  pageNum?: number;
  isLast?: boolean;
  totalPages?: number;
  total?: number;
  row?: number;
  isLoading?: boolean;
  render?: any[];
  setRender?: React.Dispatch<React.SetStateAction<any[]>>;
};

export const Pagenation = (props: Props) => {
  const [page, setPage] = useState(1);
  const { nextPage, pageNum, result } = props;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const run = async () => {
      if (props.totalPages >= page) {
        if (page > pageNum) {
          await nextPage(page);
        }
      }
    };
    run();
  }, [page, pageNum]);
  useEffect(() => {
    const skipNum = (page - 1) * props.row;
    const lenderData = result?.slice(skipNum, skipNum + props.row);
    if (lenderData?.length > 0) {
      setIsLoading(false);

      props.setRender(lenderData);
    } else {
      setIsLoading(true);
    }
  }, [result, page]);
  return (
    <Div prev={page == 1} next={page == props.totalPages}>
      <button onClick={() => setPage(page - 1)} disabled={1 == page} className="prev">
        <i></i>
        <i></i>
      </button>
      <span className="counting">
        {page}/{props.totalPages}
      </span>
      <button onClick={() => setPage(page + 1)} disabled={isLoading || page == props.totalPages} className="next">
        <i></i>
        <i></i>
      </button>
    </Div>
  );
};

const nextTransform = (angle: string, x = '0', y = '0') => {
  return css`
    i:first-child {
      transform: translate(${x}, ${y}) rotate(${angle});
    }

    i:last-child {
      transform: translate(${x}, -${y}) rotate(-${angle});
    }
  `;
};
const prevTransform = (angle: string, x = '0', y = '0') => {
  return css`
    i:first-child {
      transform: translate(${x}, -${y}) rotate(${angle});
    }

    i:last-child {
      transform: translate(${x}, ${y}) rotate(-${angle});
    }
  `;
};
const endTransform = (isEnd: boolean) => {
  if (isEnd)
    return css`
      i {
        background: #757373;
      }
      ${prevTransform('0', '0', '0')};
      :active,
      :hover {
        ${prevTransform('0', '0', '0')}
      }
      cursor: default;
    `;
};

const size = '25px';
const thickness = '5px';
const angle = '40deg';
const angleHover = '33deg';
const angleActive = '28deg';

const Div = styled.div<{ prev: boolean; next: boolean }>`
  width: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .counting {
    font-size: 15px;
    font-weight: bold;
    color: #4f4e50;
  }
  cursor: default;
  button {
    position: relative;
    background: transparent;
    border: 0;
    outline: 0;
    position: relative;
    width: ${size};
    height: ${size};
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: ${size};
    height: ${thickness};
    border-radius: calc(${thickness} / 2);
    background: #272626;
    transition: all 0.15s ease;
  }

  .prev {
    i {
      transform-origin: 0% 50%;
    }

    ${prevTransform(angle, '0px', '1px')}

    :hover {
      ${prevTransform(angleHover, '0px', '1px')}
    }

    :active {
      ${prevTransform(angleActive, '0px', '1px')}
    }
    ${({ prev }) => endTransform(prev)}
  }
  .next {
    i {
      transform-origin: 100% 50%;
    }
    ${nextTransform(angle, '0', '1px')};

    :hover {
      ${nextTransform(angleHover, '0', '1px')};
    }

    :active {
      ${nextTransform(angleActive, '0', '1px')};
    }
    ${({ next }) => endTransform(next)}
  }
`;
