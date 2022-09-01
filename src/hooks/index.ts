export { keys} from './queries/queryKeys'
export { useClientValue, useSetClient} from './queryHooks'
export { createQueryClient} from './queries/defaultQueryClient'
export { useQueryCount} from './common/useQueryCount'

export { useAuth} from './common/useAuth'
export {useLogout} from './common/useLogout'
export {useGetInfinity} from './common/useGetInfinity'

export {default as useAddAnswer} from './qustion/useAddAnswer'
export {default as useAddQuestion} from './qustion/useAddQuestion'
export {default as useAddComment} from './qustion/useAddComment'

export {default as useAddEnquiry} from './outsource/useAddEnquiry'
export {default as useAddOutsource} from './outsource/useAddOutsource'
export {default as useAddReply} from './outsource/useAddReply'

export {useDelete} from './common/useDel'

export {useInput} from './useInput'
export {useLoginModalhandler} from './useloginModalHandler';
export {useScroll} from './useScroll'

export {useDidMountEffect} from './useDidMountEffect'
export {useErrMsg} from './common/useErrMsg'