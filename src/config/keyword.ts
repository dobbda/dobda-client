import {
  backend,
  db,
  design,
  frontend,
  languages,
  mobile,
  positions,
  tags,
} from './tagList';

export const jobList = [
  {
    value: '개발자',
    label: '개발자',
  },
  {
    value: '학생',
    label: '학생',
  },
  {
    value: '대학생',
    label: '대학생',
  },
  {
    value: '회사원',
    label: '회사원',
  },
  {
    value: '프리랜서',
    label: '프리랜서',
  },
  {
    value: '대학원',
    label: '프리랜서',
  },
  {
    value: 'ceo',
    label: 'ceo',
  },
  {
    value: 'cto',
    label: 'cto',
  },
];

export const positionList = positions.map((v) => {
  return { value: v, label: v };
});

export const skillsData = [
  {
    value: '프로그래밍 언어',
    label: '프로그래밍 언어',
    checkable: false,
    children: languages.map((v) => {
      return { value: v, label: v };
    }),
  },

  {
    value: '프론트엔드',
    label: '프론트엔드',
    checkable: false,
    children: frontend.map((v) => {
      return { value: v, label: v };
    }),
  },

  {
    value: '백엔드',
    label: '백엔드',
    checkable: false,
    children: backend.map((v) => {
      return { value: v, label: v };
    }),
  },

  {
    value: 'db',
    label: 'db',
    checkable: false,
    children: db.map((v) => {
      return { value: v, label: v };
    }),
  },

  {
    value: 'mobile',
    label: 'mobile',
    checkable: false,
    children: mobile.map((v) => {
      return { value: v, label: v };
    }),
  },

  {
    value: 'ui/ux',
    label: 'ui/ux',
    checkable: false,
    children: design.map((v) => {
      return { value: v, label: v };
    }),
  },

  {
    value: '기타 태그',
    label: '기타 태그',
    checkable: false,
    children: tags.map((v) => {
      return { value: v, label: v };
    }),
  },
];

export const sourcingtag = [
  '전체',
  'Web',
  'App',
  'AWS',
  'GCP',
  'Android',
  'devOps',
  'Typescript',
  'Spring',
  'ui/ux',
  'Design',
  'Frontend',
  'Backend',
  '퍼블리셔',
  'SEO',
  '웹 개발',
  '앱 개발',
  '하이브리드',
  'ios',
  'Ai',
  '보안',
  '블록체인',
  '기획/마케팅',
  '비지니스',
  '데이터 분석',
  '이커머스',
  'Figma',
  'Photoshop',
  'Python',
  'Publisher',
];
export const questionTag = [
  '전체',
  'React',
  'Redux',
  'AWS',
  'GCP',
  'java',
  'Typescript',
  'Typeorm',
  'React-Query',
  'recoil',
  'Emotion',
  'styled-components',
  'ui/ux',
  'design',
  'Frontend',
  'Backend',
  '퍼블리셔',
  'seo',
  '웹 개발',
  '앱개발',
  '하이브리드',
  'ios',
  'ai',
  'android',
  'devops',
  '보안',
  '블록체인',
  '기획/마케팅',
  '비지니스',
  '데이터 분석',
  '이커머스',
];
