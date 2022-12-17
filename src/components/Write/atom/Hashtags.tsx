import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Tags } from 'src/interface';
import { Tag } from 'src/components/common';
import { Hashi } from 'src/icons';
import { message } from 'antd';
type Props = {
  tags?: string[];
  initial?: Tags[];
  setTags?: React.Dispatch<React.SetStateAction<string[]>>;
  tagColor?: string;
};

function Hashtags({ tags, setTags, tagColor }: Props) {
  const ref = useRef<HTMLInputElement>();
  const [tag, setTag] = useState<string>('');
  const [focus, setFocus] = useState(false);
  const tagHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    var reg = /[`~!#$%^&*()_|\=?;:'",<>\{\}\[\]\\\/ ]/gim;
    setTag(e.target.value.replace(reg, ''));
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
      if (tag && !tags?.includes(tag.toLowerCase())) {
        setTags((all) => (all ? [...all, tag.toLowerCase()] : [tag]));
        setTag('');
      } else if (tag.toLowerCase()) {
        message.warning(tag + '는 이미추가된 태그 입니다.');
      }
    },
    [setTags, tag],
  );
  //태그삭제
  const removeHandler = (removedTag: string) => {
    setTags(tags.filter((v) => v !== removedTag));
  };

  return (
    <>
      <form onSubmit={formHandler} css={{ width: '100%' }}>
        <Tag_wrapper focus={focus} className="tag-wrapper" onClick={focusHandler}>
          <Hash />
          {tags?.map((word, index) => (
            <Tag key={index} closable onClose={() => removeHandler(word)}>
              {word && word}
            </Tag>
          ))}
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

const Hash = styled(Hashi)`
  width: 18px;
  height: 20px;
  margin-right: 5px;
`;

export default React.memo(Hashtags);
