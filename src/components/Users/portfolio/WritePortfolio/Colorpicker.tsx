import { HexColorPicker, HexColorInput } from 'react-colorful';
import { Popover } from 'src/components/common';
import styled from 'styled-components';

interface Props {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}
export const Colorpicker = (props: Props) => {
  return (
    <div>
      <Popover
        trigger="click"
        bottom={20}
        right={0}
        content={
          <>
            <HexColorPicker color={props.color} onChange={props.setColor} />
            <HexColorInput color={props.color} onChange={props.setColor} />
          </>
        }
      >
        <Box color={props.color} />
      </Popover>
    </div>
  );
};

const Box = styled.div<{ color?: string }>`
  width: 50px;
  height: 20px;
  display: inline-flex;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: rgb(204 204 204) 0px 0px 0px 1px;
  background: ${({ color }) => color};
`;
