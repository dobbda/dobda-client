import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateComment } from 'src/interface';
import { useQueryCount } from '../common/useQueryCount';
import { keys } from '../queryKeys';

//db query 요청량이 많으면 커스텀 업데이트, 페이지 단위는 invalidate사용
const useAddAnswer = (qid: number) => {
  const queryClient = useQueryClient();
  const { setCount, setInfCount } = useQueryCount();
  return useMutation((data: CreateComment) => q.addAnswer(data), {
    onSuccess: async (res: AxiosResponse) => {
      await queryClient.cancelQueries(keys.answers(qid));

      if (res.data.success) {
        //상세페이지 댓글수 없데이트
        setCount({ queryKey: keys.qDetail(qid), changeKey: 'answersCount', upDown: +1 });

        await queryClient.invalidateQueries(keys.answers(qid));

        //전체 글에 업데이트 해주기
        setInfCount({ queryKey: keys.questions(), changeKey: 'answersCount', findId: qid, upDown: +1 });
      }
    },

    onError: (error: any) => {
      let message = typeof error.response !== 'undefined' ? error.response.data?.error?.message : error.message;
      queryClient.setQueryData('serverErrorMessage', message || '잘못된 요청입니다.');
    },
  });
};

export default useAddAnswer;
