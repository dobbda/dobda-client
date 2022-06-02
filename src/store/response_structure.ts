// 일반적으로 리스트는 영문법상관없이 복수형으로
export const me = {
  id: 1,
  email: '', //string
  name: '', //string
  nickname: '', //string
  description: '', //string
  skills: [''], // string[]
  coin: 0, //int
  score: 0, // int
  role: 1, //int  1,2
  createdAt: '2022-04-15T02:32:02.000Z',

  bells: [{id:1}], // requests id
  
  //--------------내가작성한포스트------------------------------------
  questions: [
    // 내가 작성한 질문
    { id: 1, acceped_answer: true }, //id:질문포스트id, acceped_answer:채택여부
    { id: 2, acceped_answer: false },
  ],

  requests: [
    { id: 1, selected:true, completing:true, completed: true, finished:true }, //id:질문포스트id, completing:내가, completed:상대방
    { id: 2, selected:true, completing:true, completed: true, finished:true},
  ],

  //-----------내가쓴 답글----------------------------------------------
  question_answers: [
    //답글 달아서 채택 받은 질문포스트
    { id: 1 }, //id:질문포스트id
    { id: 2 },
  ],
  request_answers: [
    // 기능요청글에서 내가 선택된 글 selected:true인것만 
    { id: 1,selected:true, completing:true, completed: true, finished:true }, //id: 요청포스트id, 선택 되었고 완료하였는지
    { id: 2,selected:true, completing:true, completed: false, finished:false }, //
  ],
};

export const questions = [
  {
    id: '', //int
    title: '', //stiring
    content: '', //string
    coin: '', //int
    acceped_answer: '', //boolean 채택하여쓴지
    photos: [''], //link : string,
    watch: 0, // int
    hashtags: [''], //string[]

    addBells: [
      //댓글 알림 받기원하는 유저들
      {
        id: '', // int
        nickname: '', //string
      },
    ],

    comments: [
      {
        id: '', //int
        content: '', //string
        user: {
          id: '', //int
          nickname: '', // string
        },
        acceped_answer: '', // boolean  채택여부

        createdAt: '2022-04-15T02:32:02.000Z',

        childs: [
          {
            id: '', //int
            content: '', //string
            user: {
              id: '', //int
              nickname: '', // string
            },
            acceped_answer: '', // boolean  채택여부

            createdAt: '2022-04-15T02:32:02.000Z',
          },
        ],
      },
    ],

    user: {
      id: '', //int
      nickname: '', //
    },
    createdAt: '2022-04-15T02:32:02.000Z',
  },
];

export const requests = [
  {
    id: '', //int
    title: '', //stiring
    content: '', //string
    coin: '', //int

    photos: [''], //link : string[],
    watch: 0, // int
    hashtags: [''], //string[]

    selected: false, // boolean  선택하였는지 여부
    completed: false, // 요청을 결과물을 받고 finished 하였는지
    finished: false, // boolean select된 유저와 request한 유저가 completed하였을때 true
    user: {
      id: '', //int
      nickname: '', //
    },

    comments: [
      {
        id: '', //int
        content: '', //string
        user: {
          id: '', //int
          nickname: '', // string
        },

        selected: false, // boolean  선택되었는지 여부
        completed: false, // 요청에 결과물제출하고 완료하였는지

        createdAt: '2022-04-15T02:32:02.000Z',

        chileds: [
          // 기능요청 계시글의 대댓유저는 정해져있음
          {
            id: '', //int
            content: '', //string
            user: {
              id: '', //int
              nickname: '', // string
            },
            createdAt: '2022-04-15T02:32:02.000Z',
          },
        ],
      },
    ],


    createdAt: '2022-04-15T02:32:02.000Z',
  },
];

export const user = {
  id: '', //int
  nickname: '', //
  description: '', //
  skills: [''], //
  score: 0, // int
  acceped_answer: [{ id: '' }], // 답글을 달아 채택된 질문포스트 리스트
  questions: [{ id: '' }], //포스트  갯수만 필요/ 추후 id로: api로 요청
  requests: [{ id: '' }],
  requests_selected: [{ id: '' }], //기능 요청에 selecting된 글들
};

