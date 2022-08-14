import styled from 'styled-components';

type Props = {
  types?: string;
};

export const Div = styled.div`
  width: 320px;
  text-align: center;
  border-radius: 4px;
  .err-message {
    margin:0;
    height: 20px;
    color:red;
    font-size: 13px;
		text-align: left;
  }
	.coin-data{
		padding:0 5px;
		display: flex;		
		span{color: #8400EC; font-weight: bold;}
		a{color: blue; margin-right:20px;}

	}
`;



