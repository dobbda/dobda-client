import React, { useEffect, useState } from 'react';
import { useGetInfinityQ, keys } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import QCard from '../../Card/QCard';
import styled from 'styled-components';
import { q } from 'src/api';
import RCard from 'src/components/Card/RCard';

function RenderFeatureRequest() {


  return (
    <ContentCardList>
			<RefCard>
				<RCard />
			</RefCard>
    </ContentCardList>
  );
}

const ContentCardList = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  place-items: center;
  gap: 10px;
`;
const RefCard = styled.div`
  width: 100%;
`;


export default RenderFeatureRequest;
