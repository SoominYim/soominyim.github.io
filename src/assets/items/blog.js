export default [
  {
    number: 0,
    title: "뷰스타그램",
    content: "Vue.js refactoring instagram",
    project: `Vue3, Javascript, Scss, Node.js, Express, MySql, JWT-token, Axios, Vuex, FaceBook Auth, instagram filterBox`,
    gitUrl: "https://github.com/SoominYim/vuestagram",
    url: null,
    image: require("@/assets/img/vuestagram_01.png"),
    contents: `
        메인(로그인) 페이지
        <img style="width : 100%;"src="${require("../img/vuestagram_01.png")}"/>
        회원가입 페이지
        <img style="width : 100%;"src="${require("../img/vuestagram_02.png")}"/>
        로그인 후 피드
        <img style="width : 100%;"src="${require("../img/vuestagram_03.png")}"/>
        기존 React로 만들어진 인스타그램을 Vue로 리팩토링하여 작업 
        `,
  },
  {
    number: 1,
    title: "Today-lunch",
    content: "오늘 점심 뭐먹지",
    project: `Vue3, Javascript, Scss, Vuex`,
    gitUrl: "https://github.com/SoominYim/today-lunch",
    url: "https://soominyim.github.io/today-lunch",
    image: require("@/assets/img/today-lunch.png"),
    contents: `매일 점심 정하기가 귀찮아 만들어 본 랜덤 메뉴정하기
        <img style="width : 100%;"src="${require("../img/today-lunch.png")}"/>
        원하는 음식이 나올때마다 누르는 한국인의 정서를 없애기 위해
        첫 째로 나온 음식이후엔 선택이 되지 않게 했다.
        랜덤 로직을 직접 짜는게 가장 오래 걸렸다.
        각 country로 랜덤으로 뽑아 배열의 푸시하는 방식으로 로직을 구성하였다.
`,
  },
  {
    number: 2,
    title: "Todo",
    content: `fire-base에 저장 되는 나만의 Todo List`,
    project: ` React, Javascript, Scss, Firebase,  GoogleAuth`,
    gitUrl: "https://github.com/SoominYim/reactTodo",
    url: null,
    image: require("@/assets/img/reactTodoImg.png"),
    contents: `초기 리액트 공부를 위해 만들었던 TODO LIST
        <img style="width : 100%;"src="${require("../img/reactTodoImg.png")}"/>
        `,
  },
  {
    number: 3,
    title: "Tetris",
    content: `간단한 웹 테트리스`,
    project: ` Html, Javascript, Css`,
    gitUrl: "https://github.com/SoominYim/tetris",
    url: "https://soominyim.github.io/tetris/",
    image: require("@/assets/img/tetrisImg.png"),
    contents: `공부를 위해 만들었던 테트리스.
        <img style="width : 100%;"src="${require("../img/tetrisImg.png")}"/>
        지금 봐도 낭만이 있다.
        Moving Blocks : ← →
        Block Change Direction : ↑
        Slow Drop: ↓
        Fast Drop : Space bar
        간단한 기능까지 구현 했다.`,
  },
  {
    number: 4,
    title: "vue-tetris",
    content: "휴대용 게임기처럼 만든 테트리스",
    project: ` Vue2.X, Javascript, Less, Vuex`,
    gitUrl: "https://github.com/SoominYim/vue-tetris",
    url: "https://soominyim.github.io/vue-tetris/",
    image: require("@/assets/img/vue-tetris.png"),
    contents: `기존의 구현했던 테트리스와는 다르게 좀 더 퀄리티 있는 
        테트리스 게임을 만들고 싶었다.
         <img style="width : 100%;"src="${require("../img/vue-tetris.png")}"/>
        모바일에서도 즐길 수 있게 native하게 구성되었다.
        level, sound, pause, start Line 구성, 다음에 나올 block 등등의 기능들을 
        추가하여 온전한 미니게임으로 즐길 수 있다.
         `,
  },
  {
    number: 5,
    title: "JWT-login",
    content: "JWT-token 기반 로그인 기능 구현 project",
    project: "node.js, express, JWT-token",
    gitUrl: "https://github.com/SoominYim/jwt-login",
    url: null,
    image: "",
    contents: "",
  },
  {
    number: 6,
    title: "socket-io",
    content: "socket-io 를 이용한 채팅방 구현 project",
    project: "Vue3, Node.js, Express",
    gitUrl: "https://github.com/SoominYim/vue-socket",
    url: null,
    image: "",
    contents: "",
  },
  {
    number: 7,
    title: "vue-books",
    content: "vue.js 2.X version 의 shopping mall project",
    project: "Vue2, JavaScript, Css",
    gitUrl: "https://github.com/SoominYim/vue-books",
    url: null,
    image: "",
    contents: "",
  },
];
