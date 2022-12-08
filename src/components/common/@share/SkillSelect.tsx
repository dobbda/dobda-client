import { Select as AntSelect, Tag, TreeSelect } from 'antd';
import { jobData, skillsData, workFieldData } from 'src/config/defaultValue';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import { useMemo } from 'react';
const TagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const color = useMemo(
    () => ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'],
    [],
  );
  let num = Math.floor(Math.random() * color.length);
  return (
    <Tag color={color[num]} onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
  );
};
interface SelectSkillProps {
  value: string | string[];
  setValue: React.Dispatch<React.SetStateAction<string[] | string>>;
}

export const SelectSkill = ({ value, setValue }: SelectSkillProps) => {
  return (
    <TreeSelect
      showSearch
      multiple
      style={{ width: '100%' }}
      value={value}
      // dropdownStyle={{ maxHeight: 800, overflow: 'auto' }}
      placeholder="사용가능한 스킬"
      allowClear
      onChange={(v) => setValue(v)}
      treeData={skillsData}
      tagRender={TagRender}
      treeCheckable={true}
      listHeight={500}
    />
  );
};

interface SelectWorkFieldPorps {
  value: string | string[];
  setValue: React.Dispatch<React.SetStateAction<string | string[]>>;
}
export const SelectWorkField = ({ value, setValue }: SelectWorkFieldPorps) => {
  return (
    <AntSelect
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="전문 분야"
      onChange={(v) => setValue(v)}
      listHeight={500}
      value={value}
      options={workFieldData}
      tagRender={TagRender}
    />
  );
};
