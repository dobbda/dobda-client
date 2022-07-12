import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import { BiHash } from 'src/assets/icons';

type Props = {
  tags?: string[],
  setTags?: React.Dispatch<React.SetStateAction<string[]>>
};

export function Hashtags({tags, setTags}: Props) {
  const ref = useRef<HTMLInputElement>();
  const [tag, setTag] = useState<string>("");
  const [focus, setFocus] = useState(false);
  const tagHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  }, []);

  //input에 포커스시 border 색상변화
  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (!ref.current.contains(e.target)) {
        setFocus(false);
      } else {
        setFocus(true);
      }
    };
    window.addEventListener('click', pageClickEvent, true);
    return () => {
      window.removeEventListener('click', pageClickEvent, true);
    };
  }, [focus]);

  //박스 클릭시 input focus
  const focusHandler = useCallback(() => {
    ref.current.focus();
    setFocus(true);
  }, []);

  //form handler
  const formHandler = useCallback(
    (e: any) => {
      e.preventDefault();
      setTags((tags) => [...tags, tag]);
      setTag('');
    },
    [setTags, tag],
  );
//태그삭제
  const removeHandler = useCallback(
    (removedTag: string) => {
      const newTags = tags.filter((tag) => tag !== removedTag);
      setTags(newTags);
    },
    [setTags, tags],
  );
  return (
    <>
      <form onSubmit={formHandler}>
        <Tag_wrapper focus={focus} className="tag-wrapper" onClick={focusHandler}>
          <Hash />
          {tags.map((word,index) => {
            return (

                <AntTag key={index} color={'#55acee'} closable onClose={() => removeHandler(word)}>
                  {word}
                </AntTag>

            );
          })}
          <Input id="tag-input" type="text" ref={ref} value={tag} onChange={tagHandler} />
        </Tag_wrapper>
      </form>
    </>
  );
}

type StyleProps = { focus: boolean };
const Tag_wrapper = styled.div<StyleProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  height: unset;
  min-height: 48px;
  padding: 10px 12px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  letter-spacing: -0.3px;
  border: 1px solid ${({ focus }) => (focus ? '#40a9ff' : '#dee2e6')};
  transition: all 0.3s;
  border-radius: 4px;
  background-color: #fff;
  align-items: center;
  cursor: text;
  :hover {
    border: 1px solid #40a9ff;
    transition: all 0.3s;
  }
`;
const Input = styled.input`
  width: 130px;
  height: 25px;
  padding: 0;
  line-height: 1.43;
  letter-spacing: -0.3px;
  font-size: 14px;
  border: 0;
  background: none;
  margin-left: 5px;
  :focus {
    outline: none;
  }
`;

const Hash = styled(BiHash)`
  width: 18px;
  height: 20px;
  margin-right: 5px;
`;

const AntTag = styled(Tag)`
  font-size: 15px;
  padding: 1px 4px 3px;

  border-radius: 4px;
  text-align: center;
  span {
    margin-left: 10px;
  }
`;
