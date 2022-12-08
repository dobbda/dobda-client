export const variable = {
  minCoin: 1000,
  maxNicknameLength: 15,
  accessExpires: 60000,
  refreshExpires: 300000000,
  requestRefresh: 1000 * 30,
};

export const jobData = [
  {
    value: '개발자',
    label: '개발자',
  },
  {
    value: '학생',
    label: '학생',
  },
  {
    value: '회사원',
    label: '회사원 ',
  },
  {
    value: '프리랜서',
    label: '프리랜서 ',
  },
  {
    value: 'CEO/CTO',
    label: 'CEO/CTO ',
  },
];
export const workFieldData = [
  {
    value: 'UI/UX 디자인',
    label: 'UI/UX 디자인',
  },
  {
    value: '프론트엔드',
    label: '프론트엔드',
  },
  {
    value: '백엔드',
    label: '백엔드 ',
  },
  {
    value: '퍼블리셔',
    label: '퍼블리셔 ',
  },

  {
    value: 'SEO',
    label: 'SEO',
  },

  {
    value: '웹개발 ',
    label: '웹개발 ',
  },
  {
    value: '하이브리드 ',
    label: '하이브리드 ',
  },
  {
    value: 'ios ',
    label: 'ios ',
  },
  {
    value: 'Android',
    label: 'Android ',
  },
  {
    value: 'DevOps',
    label: 'DevOps ',
  },
  {
    value: '보안',
    label: '보안 ',
  },
  {
    value: '블록체인',
    label: '블록체인 ',
  },
  {
    value: '기획/마케팅',
    label: '기획/마케팅 ',
  },
  {
    value: '비지니스',
    label: '비지니스 ',
  },
  {
    value: '데이터 분석',
    label: '데이터 분석 ',
  },
];

export const skillsData = [
  {
    value: '프로그래밍언어',
    label: '프로그래밍언어',
    checkable: false,
    children: [
      {
        value: 'Python',
        label: 'Python',
      },
      {
        value: 'Java',
        label: 'Java',
      },
      {
        value: 'JavaScript',
        label: 'JavaScript',
      },
      {
        value: 'C++',
        label: 'C++',
      },
      {
        value: 'PHP',
        label: 'PHP',
      },
      {
        value: 'C',
        label: 'C',
      },
      {
        value: 'Go',
        label: 'Go',
      },
      {
        value: 'Shell',
        label: 'Shell',
      },
      {
        value: 'Ruby',
        label: 'Ruby',
      },
    ],
  },
  {
    value: '프론트 엔드',
    label: '프론트 엔드',
    checkable: false,
    children: [
      {
        label: 'React',
        value: 'React',
      },
      {
        label: 'Nextjs',
        value: 'Nextjs',
      },
      {
        label: 'Vue',
        value: 'Vue',
      },
      {
        label: 'Nustjs',
        value: 'Nustjs',
      },
      {
        label: 'Angular',
        value: 'Angular',
      },
      {
        label: 'Svelte',
        value: 'Svelte',
      },
      {
        label: 'JQuery',
        value: 'JQuery',
      },
      {
        label: 'Ember',
        value: 'Ember',
      },
      {
        label: 'Backbone',
        value: 'Backbone',
      },
      {
        label: 'Semantic-UI',
        value: 'Semantic-UI',
      },
      {
        label: 'Foundation',
        value: 'Foundation',
      },
    ],
  },
  {
    value: '백엔드',
    label: '백엔드',
    checkable: false,
    children: [
      {
        label: 'Express',
        value: 'Express',
      },
      {
        label: 'Nestjs',
        value: 'Nestjs',
      },
      {
        label: 'Spring',
        value: 'Spring',
      },
      {
        label: 'Laravel',
        value: 'Laravel',
      },
      {
        label: 'Django',
        value: 'Django',
      },
      {
        label: 'Flask',
        value: 'Flask',
      },
      {
        label: 'Ruby-on-Rails',
        value: 'Ruby-on-Rails',
      },
    ],
  },

  {
    value: 'DB',
    label: 'DB',
    checkable: false,
    children: [
      {
        label: 'MariaDB',
        value: 'MariaDB',
      },
      {
        label: 'PostgreSQL',
        value: 'PostgreSQL',
      },
      {
        label: 'Oracle',
        value: 'Oracle',
      },
      {
        label: 'SQLite',
        value: 'SQLite',
      },
      {
        label: 'MySQL',
        value: 'MySQL',
      },
      {
        label: 'Redis',
        value: 'MongoDB',
      },
    ],
  },
  {
    value: 'mobile',
    label: '모바일',
    checkable: false,
    children: [
      {
        value: 'Objective-C',
        label: 'Objective-C',
      },
      {
        value: 'Swift',
        label: 'Swift',
      },
      {
        label: 'Kotlin',
        value: 'Kotlin',
      },
      {
        label: 'ReactNative',
        value: 'ReactNative',
      },
      {
        label: 'Flutter',
        value: 'Flutter',
      },
      {
        label: 'Xamarin',
        value: 'Xamarin',
      },
      {
        label: 'Ionic',
        value: 'Ionic',
      },
    ],
  },
  {
    value: 'UI/UX',
    label: 'UI/UX',
    checkable: false,

    children: [
      {
        label: 'Figma',
        value: 'Figma',
      },
      {
        label: 'AdobeXD',
        value: 'AdobeXD',
      },
      {
        label: 'Photoshop',
        value: 'Photoshop',
      },
      {
        label: 'Illustrator',
        value: 'Illustrator',
      },
      {
        label: 'Sketch',
        value: 'Sketch',
      },
      {
        label: 'InvisionStudio',
        value: 'InvisionStudio',
      },
    ],
  },

  {
    value: '기타',
    label: '기타',
    checkable: false,
    children: [
      {
        label: 'Redux',
        value: 'Redux',
      },
      {
        label: 'Aws',
        value: 'Aws',
      },
      {
        label: 'GCP',
        value: 'GCP',
      },
      {
        label: 'google-cloud-platform',
        value: 'google-cloud-platform',
      },
      {
        label: 'Typescript',
        value: 'Typescript',
      },
    ],
  },
];
