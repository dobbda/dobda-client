import { Answer } from '../../types/index';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateComment, CreateQuestion, Question } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';
import { useRouter } from 'next/router';
import { useQueryCount } from '../common/useQueryCount';

const useAddReply = (aid: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { qid } = router.query;
  const { setCount, setInfCount } = useQueryCount();
  return useMutation((data: CreateComment) => q.addComment(data), {
    onSuccess: async (res: AxiosResponse) => {
      await queryClient.cancelQueries(keys.comment(aid));
      if (res.data.success) {
        await queryClient.invalidateQueries(keys.replies(aid));
        setCount(keys.enquiries(Number(qid)), 'repliesCount', +1, aid);
      }
    },

    onError: (error:AxiosError) => {
			// queryClient.setQueryData("serverErrorMessage", error.response.data.error.message);
    },
  });
};

export default useAddReply;
