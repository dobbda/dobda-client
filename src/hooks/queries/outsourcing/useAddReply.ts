import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { o } from 'src/api';
import { CreateComment } from 'src/interface';
import { useQueryCount } from '../common/useQueryCount';
import { keys } from '../queryKeys';

const useAddReply = (eid: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = router.query;
  const { setCount, setInfCount } = useQueryCount();
  return useMutation((data: CreateComment) => o.addReply(data), {
    onSuccess: async (res: AxiosResponse) => {
      if (res.data.success) {
        await queryClient.invalidateQueries(keys.reply(Number(id), eid));
        setCount({ queryKey: keys.enquiry(Number(id)), changeKey: 'repliesCount', findId: eid, upDown: +1 });
      }
    },

    onError: (error: any) => {
      let message = typeof error.response !== 'undefined' ? error.response.data?.error?.message : error.message;
      queryClient.setQueryData('serverErrorMessage', message || '잘못된 요청입니다.');
    },
  });
};

export default useAddReply;
