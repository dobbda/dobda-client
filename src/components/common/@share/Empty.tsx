import { Empty as AntEmpty } from 'antd';
import styled from 'styled-components';
import Nodata from 'public/svg/noData.svg';
import { theme } from 'src/styles/Theme';
interface Props {
  descript?: string;
  border?: boolean;
}
const Wrap = styled.div`
  border: solid 1px #a8a8a8;
  padding: 20px 0;
  width: 100%;
`;
export const Empty = ({ descript, border }: Props) => {
  if (border) {
    return (
      <Wrap>
        <AntEmpty
          description={descript && descript}
          image={AntEmpty.PRESENTED_IMAGE_SIMPLE}
          css={{ margin: '10px auto' }}
        />
      </Wrap>
    );
  }
  return (
    <AntEmpty
      description={descript && descript}
      image={AntEmpty.PRESENTED_IMAGE_SIMPLE}
      css={{ margin: '10px auto' }}
    />
  );
};

export const NoData: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Nodata />
      <Descript css={{ textAlign: 'center' }}>{children}</Descript>
    </>
  );
};

const Descript = styled.div`
  text-align: center;
  strong {
    color: ${theme.color.secondary};
  }
`;
