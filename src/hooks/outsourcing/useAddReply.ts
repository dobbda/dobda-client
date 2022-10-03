import { addReply } from '../../api/apis/outsourcing';
import { Answer } from '../../types/index';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { o, q } from 'src/api';
import { CreateComment, CreateQuestion, Question } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';
import { useRouter } from 'next/router';
import { useQueryCount } from '../common/useQueryCount';

const useAddReply = (aid: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { oid } = router.query;
  const { setCount, setInfCount } = useQueryCount();
  return useMutation((data: CreateComment) => o.addReply(data), {
    onSuccess: async (res: AxiosResponse) => {
      await queryClient.cancelQueries(keys.comment(aid));
      if (res.data.success) {
        await queryClient.invalidateQueries(keys.replies(aid));
        setCount({ queryKey: keys.enquiries(Number(oid)), changeKey: 'repliesCount', findId: aid, upDown: +1 });
      }
    },

    onError: (error: AxiosError) => {
      queryClient.setQueryData('serverErrorMessage', error?.message || '잘못된 요청입니다.');
    },
  });
};

export default useAddReply;
