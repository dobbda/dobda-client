
import React from 'react';
// 일반적으로 리스트는 영문법상관없이 복수형으로
import { faker } from '@faker-js/faker';
const id = (len:number=5)=>faker.datatype.string(len);
const words = (len:number=5)=>faker.lorem.sentence(len);
const date = faker.date.past();
const numInt = (min:number, max:number)=>faker.datatype.number({max:max, min:min});
const boolean = faker.datatype.boolean();
const name = faker.name.firstName();
const url = faker.image.animals() //image url
const email = ()=>faker.internet.email()
export const me = {
  id: id(),
  email: email(), //string
  name: faker.name.firstName(), //string
  nickname: faker.name.lastName(), //string
  description: faker.lorem.sentence(), //string
  skills: faker.lorem.words(5).split(" "), // string[]
  coin: faker.datatype.number({max:5000, min:800}), //int
  score: faker.datatype.number({max:5000, min:800}), // int
  role: 1, //int  1,2
  createdAt: faker.date.past(),
  bells: [{id:id},{id:id}], // requests id

  //--------------내가작성한포스트------------------------------------
  questions: [
    // 내가 작성한 질문
    { id: id(6), acceped_answer: true }, //id:질문포스트id, acceped_answer:채택여부
    { id: id(7), acceped_answer: false },
  ],

  requests: [
    {  id: id(6), complited: boolean }, //id:질문포스트id, acceped_answer:채택여부
    { id: id(6) ,complited: boolean},
  ],
  //-----------내가쓴 답글----------------------------------------------
  question_answers: [
    //답글 달아서 채택 받은 질문포스트
    { id: id(6) }, //id:질문포스트id
    { id: id(6) },
  ],
  request_answers: [
    // 기능요청글에서 내가 선택된 글
    { id: id(6) }, //id: 요청포스트id
    { id: id(6) },
  ],
};

const question = {
    id: id(6), //int
    title: words(), //stiring
    content: words(30), //string
    coin: numInt(1000,10000), //int
    acceped_answer: '', //boolean 채택하여쓴지
    photos: [{id: id(6), src: 'https://'}], //또는 
    watch: numInt(1,50), // int
    hashtags: words().split(" "), //string[]

    addBells: [
      //댓글 알림 받기원하는 유저들
      {
        id: id(6), // int
        nickname: name, //string
      },
    ],

    comments: [
      {
        id: id(6), //int
        content: words(6), //string
        user: {
          id: id(6), //int
          nickname: name, // string
        },
        acceped_answer: boolean, // boolean  채택여부

        createdAt: date,

        childs: [
          {
            id: id(6), //int
            content: words(5), //string
            user: {
              id: id(6), //int
              nickname: name, // string
            },
            acceped_answer: boolean, // boolean  채택여부

            createdAt: date,
          },
        ],
      },
    ],

    user: {
      id: id(6), //int
      nickname: name, //
    },
    createdAt: date,
  }


const request = 
 {
    id: id(6), //int
    title: words(), //stiring
    content: words(20), //string
    coin: '', //int

    photos: [{id: id(), src: ''}], //link : string[],
    watch: numInt(1,30), // int
    hashtags: words().split(" "), //string[]

    selected: boolean, // boolean  선택하였는지 여부
    completed: boolean, // 요청을 결과물을 받고 finished 하였는지
    createdAt:date,
    user: {
      id: id(), //int
      nickname: name, //
    },

    comments: [
      {
        id: id(), //int
        content: words(7), //string
        user: {
          id: id(), //int
          nickname: name, // string
        },

        selected: false, // boolean  선택되었는지 여부
        completed: false, // 요청에 결과물제출하고 완료하였는지

        createdAt: name,

        chileds: [
          // 기능요청 계시글의 대댓유저는 정해져있음
          {
            id: id(), //int
            content: words(6), //string
            user: {
              id: id(), //int
              nickname: name, // string
            },
            createdAt: date,
          },
        ],
      },
    ],


  }

const user = {
  id: id(), //int
  email: email(), //string
  nickname: name, //
  description: words(10), //
  skills: words(10).split(" "), //
  score: numInt(20,100), // int
  acceped_answer: [{ id: id() }], // 답글을 달아 채택된 질문포스트 리스트
  questions: [{ id: id() },{ id: id() },{ id: id() }], //포스트  갯수만 필요/ 추후 id로: api로 요청
  requests: [{ id: id() },{ id: id() },{ id: id() }],
};


export const questions=(len: number=5) => {
  let questionList:any[] = []
  for (let i = 0; i<len; i++ ){
    questionList.push(question)
  }

  return questionList
}

export const requests=(len: number=5) => {
  let requestList:any[] = []
  for (let i = 0; i<len; i++ ){
    requestList.push(request)
  }

  return requestList
}

export const users=(len: number=5) => {
  let userList:any[] = []
  for (let i = 0; i<len; i++ ){
    userList.push(user)
  }

  return userList
}
