import React from 'react';
import { SearchIcon } from 'src/assets/icons';
import styled from 'styled-components';
type Props = {};

const SearchBox = (props: Props) => {
  return (
    <Div className="search-box">
      <input type="text" placeholder="태그검색" />
      <button>
        <Shearch />
      </button>
    </Div>
  );
};

export default SearchBox;

const Shearch = styled(SearchIcon)`
  height: 18px;
  width: 18px;
`;

const Div = styled.div`
  margin-top: 20px;
  height: 42px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;

  input {
    border: none;
    background: none;
    outline: none;
    font-size: 1rem;
    line-height: 33px;
    transition: 0.4s;

    width: 100%;
    padding: 0 15px;
    padding-top: 2px;
    ::placeholder {
      color: rgba(0, 0, 0, 0.4);
      font-weight: 600;
    }
  }
  button {
    text-decoration: none;
    float: right;
    width: 39px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    background-color: none;
  }
`;
