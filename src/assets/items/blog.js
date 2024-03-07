export default [
  {
    number: 0,
    title: "뷰스타그램",
    content: "Vue.js refactoring instagram",
    project: `#Vue3, #Vuex, #Javascript, #Scss, #Node.js, #Express, #MySql, #JWT-token, #Axios, #FaceBook-Auth`,
    gitUrl: "https://github.com/SoominYim/vuestagram",
    url: null,
    image: require("@/assets/img/vuestagram_01.png"),
    contents: `
         Vue.js로 제작된 '뷰스타그램'은 인스타그램을 모티브로 한 프로젝트입니다. 기존에 React로 작성된 인스타그램을 Vue.js로 리팩토링하여 제작하였습니다. Vue3, JavaScript, SCSS를 사용하여 프론트엔드를 개발하였고, 백엔드는 Node.js와 Express 프레임워크를 이용하여 구축하였습니다. 데이터베이스는 MySQL을 사용하였으며, 사용자 인증에는 JWT 토큰을 활용하였습니다. Axios를 이용하여 HTTP 통신을 하고 Vuex를 사용하여 상태 관리를 하였습니다. 또한, 페이스북 인증 및 인스타그램 필터 박스 등의 기능을 구현하였습니다.
          <span style="font-size:24px">🖥 프로젝트의 주요 기능</span>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>사용자는 회원가입 및 로그인을 할 수 있습니다.</li>
            <li>인증된 사용자는 피드를 확인할 수 있고, 사진과 코멘트를 남길 수 있습니다.</li>
            <li>사용자는 피드에서 다른 사용자의 사진을 좋아요 및 댓글을 달 수 있습니다.</li>
            <li>페이스북 인증을 통해 사용자는 쉽게 가입할 수 있습니다.</li>
            <li>인스타그램과 유사한 필터를 적용하여 사진을 편집할 수 있습니다.</li>
            <li>Infinity Scroll를 활용하여 Feed Data를 가져옵니다.</li>
          </ul>
        <div style="text-align:center">
            <img style="width : 85%; border-radius: 10px;"src="${require("../img/vuestagram_01.png")}"/>
            메인(로그인) 페이지
            <br/>
            <img style="width : 85%; border-radius: 10px;"src="${require("../img/vuestagram_02.png")}"/>
            회원가입 페이지
            <br/>
            <img style="width : 85%; border-radius: 10px;"src="${require("../img/vuestagram_03.png")}"/>
            로그인 후 피드
            <br/>
            <img style="width : 85%; border-radius: 10px;"src="${require("../img/vuestagram_04.png")}"/>
            DB_diagram
        </div>
        <span style="font-size:24px">🖥 데이터베이스 구조</span>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>users 테이블: 사용자 정보를 저장합니다. 사용자의 이름, 닉네임, 비밀번호 등을 포함합니다.</li>
            <li>follow 테이블: 사용자 간의 팔로우 관계를 저장합니다.</li>
            <li>block 테이블: 사용자 간의 차단 관계를 저장합니다.</li>
            <li>posts 테이블: 게시물 정보를 저장합니다. 게시물의 텍스트 내용과 작성 시간을 포함합니다.</li>
            <li>medias 테이블: 미디어 (이미지 또는 비디오) 정보를 저장합니다.</li>
            <li>post_media 테이블: 게시물과 미디어 간의 관계를 저장합니다.</li>
            <li>comments 테이블: 댓글 정보를 저장합니다. 댓글의 내용과 작성 시간을 포함합니다.</li>
            <li>likes 테이블: 좋아요 정보를 저장합니다. 어떤 대상에 대한 좋아요인지, 사용자가 누른 좋아요인지, 그리고 작성 시간을 포함합니다.</li>
          </ul>
        이 데이터베이스 구조를 통해 사용자 간의 관계, 게시물 및 미디어 콘텐츠, 댓글, 좋아요 등의 정보를 효과적으로 관리하고 조회할 수 있습니다.
        `,
  },

  {
    number: 1,
    title: "Mini_Mate",
    content: "Tools web",
    project: `#Vue3, #Vuex, #Javascript, #Scss`,
    gitUrl: "https://github.com/SoominYim/Mini_Mate",
    url: "https://mini-mate.vercel.app/",
    image: require("@/assets/img/mini.png"),
    contents: `
`,
  },
  {
    number: 2,
    title: "Today_Lunch",
    content: "오늘 점심 뭐먹지",
    project: `#Vue3, #Vuex, #Javascript, #Scss`,
    gitUrl: "https://github.com/SoominYim/today-lunch",
    url: "https://soominyim.github.io/today-lunch",
    image: require("@/assets/img/today-lunch.png"),
    contents: `매일 점심 정하기가 귀찮아 만들어 본 랜덤 메뉴정하기
        <img style="width : 85%; border-radius: 10px;"src="${require("../img/today-lunch.png")}"/>
        원하는 음식이 나올때마다 누르는 한국인의 정서를 없애기 위해
        첫 째로 나온 음식이후엔 선택이 되지 않게 했다.
        랜덤 로직을 직접 짜는게 가장 오래 걸렸다.
        각 country로 랜덤으로 뽑아 배열의 푸시하는 방식으로 로직을 구성하였다.
`,
  },
  {
    number: 3,
    title: "Todo",
    content: `fire-base에 저장 되는 나만의 Todo List`,
    project: `#React, #Javascript, #Scss, #Firebase, #GoogleAuth`,
    gitUrl: "https://github.com/SoominYim/reactTodo",
    url: null,
    image: require("@/assets/img/reactTodoImg.png"),
    contents: `초기 리액트 공부를 위해 만들었던 TODO LIST
        <img style="width : 85%; border-radius: 10px;"src="${require("../img/reactTodoImg.png")}"/>
        `,
  },
  {
    number: 4,
    title: "Js_Tetris",
    content: `간단한 웹 테트리스`,
    project: `#Html, #Javascript, #Css`,
    gitUrl: "https://github.com/SoominYim/tetris",
    url: "https://soominyim.github.io/tetris/",
    image: require("@/assets/img/tetrisImg.png"),
    contents: `Html, Css, Js만을 사용한 테트리스.
        <img style="width : 85% ;border-radius: 10px;"src="${require("../img/tetrisImg.png")}"/>
        지금 봐도 낭만이 있다.
        Moving Blocks : ← →
        Block Change Direction : ↑
        Slow Drop: ↓
        Fast Drop : Space bar
        간단한 기능까지 구현 했다.`,
  },
  {
    number: 5,
    title: "Vue-Tetris",
    content: "휴대용 게임기처럼 만든 테트리스",
    project: `#Vue2.X, #Javascript, #Less, #Vuex`,
    gitUrl: "https://github.com/SoominYim/vue-tetris",
    url: "https://soominyim.github.io/vue-tetris/",
    image: require("@/assets/img/vue-tetris.png"),
    contents: `기존의 구현했던 테트리스와는 다르게 좀 더 퀄리티 있는 
        테트리스 게임을 만들고 싶었다.
         <img style="width : 85% ;border-radius: 10px;"src="${require("../img/vue-tetris.png")}"/>
        모바일에서도 즐길 수 있게 native하게 구성되었다.
        level, sound, pause, start Line 구성, 다음에 나올 block 등등의 기능들을 
        추가하여 온전한 미니게임으로 즐길 수 있다.
         `,
  },
];
