import styled from 'styled-components';
import LogoW from 'public/svg/NAME_W.svg';
import LogoB from 'public/svg/NAME_B.svg';
import LogoBB from 'public/svg/NAME_BB.svg';
import LogoBBB from 'public/svg/NAME_BBB.svg';
import Logo from 'public/svg/logo.svg';
import Won from 'public/svg/won.svg';
import QIcon from 'public//svg/Q.svg';
import AcceptedIcon from 'public/svg/accepted.svg';
export {
  QIcon,
  AcceptedIcon,
  Won,
  LogoW as LogoIconW,
  LogoB as LogoIconB,
  LogoBB as LogoBB,
  LogoBBB as LogoBBB,
  Logo as LogoIcon,
};

export { BiHash as HashIcon } from 'react-icons/bi';
// export { RiBitCoinFill as CoinIcon} from 'react-icons/ri';
export { FaReply as ReplyFillIcon } from 'react-icons/fa';
export { IoMdArrowRoundBack as BackArrow } from 'react-icons/io';
export { FcGoogle as GoogleIcon } from 'react-icons/fc';
export { SiNaver as NaverIcon } from 'react-icons/si';
export { GoMarkGithub as GithubIcon } from 'react-icons/go';
export { BiReply as ReplyIcon } from 'react-icons/bi';
export { BiLogInCircle as LoginIcon } from 'react-icons/bi';
export { BsChatLeft as ChatIcon } from 'react-icons/bs';
export { IoIosEye as WatchIcon } from 'react-icons/io';
export { RiKakaoTalkFill as KakaoIcon } from 'react-icons/ri';
export { BiPencil as PenIcon } from 'react-icons/bi';
export { AiOutlineSearch as SearchIcon } from 'react-icons/ai';
export { AiOutlineUser as UserIcon } from 'react-icons/ai';
export { AiFillNotification as NoticeIcon } from 'react-icons/ai';
export { BsBell as BellIcon } from 'react-icons/bs';
export { ImNotification as RuleIcon } from 'react-icons/im';
export { GrMoreVertical as MoreIcon } from 'react-icons/gr';
export { BsBookmark as BookmarkIcon } from 'react-icons/bs';
export { IoIosClose as TagCloseIcon } from 'react-icons/io';
export { RiRefreshLine as RefreshIcon } from 'react-icons/ri';
export { RiQuestionnaireFill as QuestionIcon } from 'react-icons/ri';
export { FaHandsHelping as OutSourceIcon } from 'react-icons/fa';
export { BiRightArrow as GoArrowIcon } from 'react-icons/bi';

import { RiArrowDownSLine } from 'react-icons/ri';
export const MainArrowIcon = styled(RiArrowDownSLine)`
  transform: rotate(-180deg);
`;

import { MdPlayArrow } from 'react-icons/md';
export const ArrowIcon = styled(MdPlayArrow)`
  transform: rotate(-90deg);
  font-size: 18px;
`;
import { RiBitCoinFill } from 'react-icons/ri';
export const CoinIcon = styled(RiBitCoinFill)`
  font-size: 17px;
  color: #f3aa0f;
`;

import { BsChatLeftDotsFill } from 'react-icons/bs';
export const ReCommentIcon = styled(BsChatLeftDotsFill)`
  font-size: 17px;
  font-weight: bold;
`;
