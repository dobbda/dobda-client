import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateComment } from 'src/interface';
import { useQueryCount } from '../common/useQueryCount';
import { keys } from '../queryKeys';

const useAddCommentQ = (aid: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = router.query;

  const { setCount, setInfCount } = useQueryCount();
  return useMutation((data: CreateComment) => q.addComment(data), {
    onSuccess: async (res: AxiosResponse) => {
      await queryClient.cancelQueries(keys.comment(Number(id), aid));
      if (res.data.success) {
        await queryClient.invalidateQueries(keys.comment(Number(id), aid));
        setCount({ queryKey: keys.answers(Number(id)), changeKey: 'commentsCount', findId: aid, upDown: +1 });
      }
    },

    onError: (error: any) => {
      let message = typeof error.response !== 'undefined' ? error.response.data?.error?.message : error.message;
      queryClient.setQueryData('serverErrorMessage', message || '잘못된 요청입니다.');
    },
  });
};

export default useAddCommentQ;
