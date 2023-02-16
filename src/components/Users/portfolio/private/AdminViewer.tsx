import React, { Component, useCallback, useRef, useState } from 'react';
import HtmlViewer from 'src/components/Editor/HtmlViewer';
import {
  CreatePortfolio,
  ImageProp,
  Maker,
  PortfolioContent,
} from 'src/interface';
import styled from 'styled-components';
import DraggableList, { TemplateProps } from 'react-draggable-list';
import { Dragi } from 'src/icons';
import { Button } from 'src/components/common/@share/Buttons';
import PfEditor from './WritePortfolio/PfEditor';
import { EditorCt } from './style';
import { UploadFile } from 'antd';
import produce from 'immer';
import { listFileUpload } from '../lib/listFileUpload';
import CarouselsImages from '../Carousel';

interface Props {
  contents?: PortfolioContent[];
  setContents?: React.Dispatch<React.SetStateAction<PortfolioContent[]>>;
}

const AdminViewer = ({ contents, setContents }: Props) => {
  const containerRef = useRef<any>();
  const _onListChange = (newList: PortfolioContent[]) => {
    setContents([...newList]);
  };

  const Item: any = ({
    item,
    dragHandleProps,
  }: {
    item: PortfolioContent;
    dragHandleProps: any;
  }) => {
    const { onMouseDown, onTouchStart } = dragHandleProps;
    const [isEdit, setIsEdit] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [html, setHtml] = useState('');

    const onEdit = () => {
      setFileList(item.images);
      setHtml(item.content);
      setIsEdit(true);
    };
    const onSave = useCallback(async () => {
      const images = await listFileUpload(fileList);
      setContents(
        produce(contents, (draft) => {
          const find = draft.find((v) => v.key == item.key);
          find.content = html;
          find.images = images;
        }),
      );
      setIsEdit(false);
    }, [fileList, html, contents, item]);

    const onRemove = useCallback(() => {
      setContents(contents.filter((v) => v.key != item.key));
    }, [item, contents]);

    return (
      <ItemStyle className="disable-select">
        {isEdit ? (
          <EditorCt>
            <PfEditor
              setHtml={setHtml}
              html={html}
              fileList={fileList}
              setFileList={setFileList}
            />
            <div className="edit_btn_group">
              <Button
                types="danger"
                onClick={() => setIsEdit(false)}
                css={{ marginTop: '5px', borderRadius: '4px' }}
              >
                취소
              </Button>
              <Button
                onClick={onSave}
                css={{ marginTop: '5px', borderRadius: '4px' }}
                $fill
              >
                저장
              </Button>
            </div>
          </EditorCt>
        ) : (
          <>
            <div className="item_header">
              <div
                className="disable-select dragHandle"
                onTouchStart={(e) => {
                  e.preventDefault();
                  onTouchStart(e);
                }}
                onMouseDown={(e) => {
                  onMouseDown(e);
                }}
                onTouchEnd={(e) => {
                  document.body.style.overflow = 'visible';
                }}
                onMouseUp={() => {
                  document.body.style.overflow = 'visible';
                }}
              >
                <Dragi />
              </div>
              <span className="btn_group">
                <Button onClick={onEdit}>수정</Button>
                <Button onClick={onRemove} types="danger">
                  삭제
                </Button>
              </span>
            </div>
            {item.content && <HtmlViewer content={item.content} />}
            {item.images.length > 0 && <CarouselsImages images={item.images} />}
          </>
        )}
      </ItemStyle>
    );
  };

  return (
    <div
      ref={containerRef}
      css={{
        touchAction: 'pan-y',
        paddingTop: '20px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <DraggableList
        itemKey="key"
        template={Item}
        list={contents}
        onMoveEnd={(newList: any) => _onListChange(newList)}
        container={() => containerRef.current}
      />
    </div>
  );
};

export default AdminViewer;

const ItemStyle = styled.div`
  .ql-editor {
    padding: 0;
  }
  .item_header {
    transition: all 200ms;
    justify-content: space-between;
    padding: 5px 10px;
    display: none;
    position: absolute;
    top: -30px;
    right: 0;
    left: 0;
    box-shadow: 0px -2px 0px 0px #c9c9c9 inset;
    z-index: 1;
  }
  .disable-select,
  .dragHandle {
    text-align: center;
    font-size: 20px;
    width: 20px;
    height: 20px;
    user-select: none;
    cursor: move;
  }
  .btn_group {
    display: flex;
    gap: 10px;
  }
  .edit_btn_group {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  :hover {
    transition: all 200ms;
    background-color: #f7f7f7;
    position: relative;

    .item_header {
      transition: all 200ms;
      background-color: #eeeeee;
      display: flex;
    }
  }
`;

const EditWrap = styled.div``;
