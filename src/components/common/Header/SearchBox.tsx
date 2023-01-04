import React, { useCallback } from 'react';
import styled, { css, CSSObject, CSSProp } from 'styled-components';
import { theme } from 'src/styles/Theme';
import { Searchi } from 'src/icons';
import { useRouter } from 'next/router';
import { useInput } from 'src/hooks';
type Props = {
  placeholder?: string;
  style?: CSSProp | CSSObject;
};

export const SearchBox = ({ placeholder, style }: Props) => {
  const router = useRouter();
  const [value, onChange] = useInput('');
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push({ pathname: '/', query: { ...router.query, keyword: value } }, undefined, { scroll: false });
    },
    [value, router],
  );
  return (
    <Form className="search-box" onSubmit={onSubmit} css={style}>
      <input type="text" placeholder={placeholder ? placeholder : '키워드 검색'} value={value} onChange={onChange} />
      <button type="submit">
        <Shearch />
      </button>
    </Form>
  );
};

const Transition = css`
  /* -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out; */
  transition: all 0.2s ease-in-out;
`;
const Shearch = styled(Searchi)`
  height: 18px;
  width: 18px;
  color: ${theme.color.primary};
`;

const Form = styled.form`
  max-width: 600px;
  height: 30px;
  background-color: #fff;
  border: 1px solid ${theme.color.border2};
  width: 160px;
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
  ${Transition}

  :hover {
    border: 1px solid ${theme.color.primary};
    box-shadow: ${theme.color.prRgb(0.5)} 0px 0px 0px 2px;
  }

  input {
    ${Transition}
    font-size: 14px;
    width: 100%;
    border: none;
    background: none;
    outline: none;
    line-height: 20px;
    padding: 0 15px;
    ::placeholder {
      color: #969696;
      font-weight: 400;
    }
  }
  :focus-within {
    ${Transition}
    width: 90%;
    border: 1px solid ${theme.color.primary};
    box-shadow: ${theme.color.prRgb(0.5)} 0px 0px 0px 3px;
  }

  button {
    text-decoration: none;
    float: right;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    background-color: none;
  }
`;
