import { Enquiry } from '../../types/index';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { o, q } from 'src/api';
import { CreateComment, CreateQuestion, Question, QuestionDetail } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';
import { useQueryCount } from '../common/useQueryCount';

//db query 요청량이 많으면 커스텀 업데이트, 페이지 단위는 invalidate사용
const useAddEnquiry = (oid: number) => {
  const queryClient = useQueryClient();
  const { setCount, setInfCount } = useQueryCount();
  return useMutation((data: CreateComment) => o.addEnquiry(data), {
    onSuccess: async (res: AxiosResponse) => {
      console.log(res);
      await queryClient.cancelQueries(keys.enquiries(oid));

      if (res.data.success) {
        //상세페이지 댓글수 없데이트
        setCount({ queryKey: keys.oDetail(oid), changeKey: 'enquiriesCount', upDown: +1 });
        await queryClient.invalidateQueries(keys.enquiries(oid));

        //전체 글에 업데이트 해주기
        setInfCount({ queryKey: keys.questions(), changeKey: 'enquiriesCount', findId: oid, upDown: +1 });
      }
    },

    onError: (error: AxiosError) => {
      queryClient.setQueryData('serverErrorMessage', error.response?.data?.error?.message || '잘못된 요청입니다.');
    },
  });
};

export default useAddEnquiry;
