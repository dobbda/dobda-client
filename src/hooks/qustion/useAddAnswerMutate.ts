import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateAnswer, CreateQuestion, Question, QuestionDetail } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';
import { useQueryCount } from '../common/useQueryCount';


//db query 요청량이 많으면 커스텀 업데이트, 페이지 단위는 invalidate사용
const useAddAnswerMutate = (qid: number) => {
  const queryClient = useQueryClient();
	const {setCount, setInfCount} = useQueryCount()
  return useMutation((data: CreateAnswer) => q.addAnswer(data), {
    onSuccess: async (res: AxiosResponse) => {
      await queryClient.cancelQueries(keys.answers(qid));

      if (res.data.success) {
				//상세페이지 댓글수 없데이트
				setCount(keys.qDetail(qid), "answersCount", +1)
        await queryClient.invalidateQueries(keys.answers(qid));

        //전체 글에 업데이트 해주기
				setInfCount(keys.questions(), "answersCount", qid, +1);

      }
    },

    onError: (error) => {
      console.log('onError: ', error);
    },
  });
};

export default useAddAnswerMutate;
