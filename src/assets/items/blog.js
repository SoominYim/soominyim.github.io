export default [
  {
    number: 0,
    title: "Mevie",
    content: `Vue.js 3.X를 사용하여 개발된 영화검색 웹 애플리케이션입니다.`,
    project: `#Vue3, #Vuex, #VueRouter, #Javascript, #Scss, #Axios`,
    gitUrl: "https://github.com/SoominYim/Mevie",
    url: "https://mevie.vercel.app/",
    image: require("@/assets/img/mevie_01.png"),
    contents: `
         이 애플리케이션은 사용자가 원하는 영화를 검색하고 해당 영화에 대한 정보를 제공하는 기능을 제공합니다. TMDB API를 활용하여 영화 데이터를 가져와 사용자에게 제공합니다.
          <span style="font-size:24px">🎞 프로젝트의 주요 기능</span>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>사용자는 검색 창에 영화 제목을 입력하여 원하는 영화를 검색할 수 있습니다.</li>
            <li>검색된 영화에 대한 정보(영화 제목, 개봉일, 포스터 등)를 화면에 표시됩니다.</li>
          </ul>
          <span style="font-size:24px">📚 스토리보드</span>
          <span style="font-size:20px">📖 공통 사항</span>
            <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>Logo 클릭 시 메인 화면으로 이동합니다.</li>
              <li>Search Button 클릭 시 검색 페이지로 이동합니다.</li>
              <li>Arrow Top 클릭 시 페이지 최상단으로 이동합니다.</li>
              <li>Mode 토글 시 Bright Mode, Dark Mode로 Mode 변경이 가능합니다.</li>
              <li>페이지 재방문 시 기존에 적용했던 Mode는 유지 됩니다.</li>
            </ul>
          <span style="font-size:20px">📖 메인 페이지</span>
            <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>인기 Movie Slider와 장르별 Movie List Slider가 표시됩니다.</li>
              <li>페이지 리사이즈 시 요소들의 scale이 작아집니다.</li>
              <li>페이지 리사이즈 되어도 장르별 영화는 중앙 정렬됩니다.</li>
              <li>장르별 영화 클릭 시 상세 페이지로 이동합니다.</li>
              <li>장르별 영화 슬라이드에 Mouse Over 시 좌우 Arrow가 표시됩니다.</li>
              <li>더 이상 슬라이드가 없다면 Arrow가 표시 되지 않습니다.</li>
            </ul>
          <span style="font-size:20px">📖 상세 페이지</span>
            <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
                <li>선택한 영화의 상세 내용이 표시됩니다.</li>
                <li>감독/출연진의 내용이 표시됩니다.</li>
                <li>비슷한 장르의 Movie List가 표시되며 클릭 시 상세 페이지로 이동합니다.</li>
            </ul>
          <span style="font-size:20px">📖 검색 페이지</span>
            <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>입력시 실시간으로 입력한 Movie가 Filtering 되어 화면에 표시됩니다.</li>
              <li>문자열의 앞과 끝은 띄어쓰기가 적용되지 않습니다.</li>
              <li>한 글자 이상 입력하여야 결과가 표시됩니다.</li>
              <li>Movie List는 window가 리사이즈 되어도 중앙 정렬됩니다.</li>
              <li>더 불러올 영화정보가 있다면, 최하단으로 스크롤 시 추가로 영화를 불러옵니다.</li>
            </ul>
             <span style="font-size:24px">🖍 UI/UX 디자인</span>
              <div style="text-align:center">
                  <img style="width : 85%; border-radius: 10px;"src="${require("../img/mevie_02.png")}"/>
                  로고
                  <br/>
                  <img style="width : 85%; border-radius: 10px;"src="${require("../img/mevie_03.png")}"/>
                  메인 페이지
                  <br/>
                  <img style="width : 85%; border-radius: 10px;"src="${require("../img/mevie_04.png")}"/>
                  상세 페이지
                  <br/>
                  <img style="width : 85%; border-radius: 10px;"src="${require("../img/mevie_05.png")}"/>
                  검색 페이지
              </div>
            <span style="font-size:24px">🖥 기능 구현</span>
            <span style="font-size:20px">🔔공통 사항</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li> TMDB API 사용하여 영화정보 GET</li>
              <li> Arrow Top, Dark Mode 구현</li>
              <li>  사용모드 Local storage 저장 (재방문 시 기존에 설정했던 모드 사용)</li>
              <li> Main, Search, Detail Router 적용</li>
              <li>  현재 접속한 디바이스 별로 보여지는 Router 다르게 적용 (MobileDetect 사용)</li>
              **Mobile**
              <li>  각종 Icon의 LayOut 변경 (Size, Position 등)</li>
            </ul>
            <span style="font-size:20px">🔔메인 페이지</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>  메인 Slider에서 infinyty slide 구현</li>
              <li>  인기영화 순으로 Sorted</li>
              <li>  페이지 성능을 위해 필요 한 경우에만 API 요청</li>
              <li>  Window Resize시에도 이미지 크기 유지</li>
              <li>  장르별 Movie List Slider 구현</li>
              <li>  Mouse Over시 Arrow 표시</li>
              <li>  더 이상 움직일 Slide가 없다면 Arrow는 표시 되지 않습니다.</li>
              <li>  Window Resize 시 가운데 유지</li>
              <li>  Window Resize 시 Slide Page 유지</li>
              <li>  영화 클릭 시 상세 페이지로 Route</li>
              **Mobile**
              <li>  메인 Slider의 Overview 삭제</li>
              <li>  장르별 영화 Slide는 Drag 방식</li>
            </ul>
            <span style="font-size:20px">🔔상세 페이지</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>  선택한 영화로 페이지 이동</li>
                <li>  URL로 영화 구분 </li>
              <li>  영화 상세, 감독/출연진, 비슷한 영화 Component 분리</li>
                <li>  Parent Component에서 Data 처리 후 각각의 Component로 Data Binding</li>
              <li>  비슷한 장르 영화 클릭 시 Detail Page로 Route</li>
            </ul>
            </ul>
            <span style="font-size:20px">🔔검색 페이지</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>  입력시 실시간으로 입력한 내용 표시</li>
                <li>  두 글자 이상 입력 시 내용 표시 (필요하지 않은 정보가 요청되는 것을 방지)</li>
                <li>  trim을 이용하여 앞뒤 띄어쓰기 무시</li>
                <li>  검색 input 상단 고정</li>
              <li>  Window Resize 시에도 요소 중앙 정렬</li>
              <li>  최하단으로 스크롤 시 더 불러올 Data가 있다면 API 추가 요청</li>
              <li>  data Loading시 더 나은 사용자 경험을 위해 Spinner 사용</li>
              <li>  영화 클릭 시 상세 페이지로 Route </li>
            </ul>
            <span style="font-size:20px">🖨프리뷰</span>
            <div style="text-align:center">
                  메인 페이지
                  <img style="width : 85%; border-radius: 10px;"src="${require("../img/mevie_07.png")}"/>
                  <img style="width : 85%; border-radius: 10px;"src="${require("../img/mevie_08.png")}"/>
                  <br/>
                  상세 페이지
                  <img style="width : 85%; border-radius: 10px;"src="${require("../img/mevie_09.png")}"/>
                  <br/>
                  검색 페이지
                  <img style="width : 85%; border-radius: 10px;"src="${require("../img/mevie_10.png")}"/>
                  <br/>
                  모바일
                  <img style="width : 85%; border-radius: 10px;"src="${require("../img/mevie_11.png")}"/>
              </div>

        `,
  },

  {
    number: 1,
    title: "PDF TO SVG HTML",
    content: "Tools web",
    project: `#Vue3, #Javascript, #Scss, #Node.js, #Express`,
    gitUrl: "https://github.com/SoominYim/Mini_Mate",
    url: "https://mini-mate.vercel.app/",
    image: require("@/assets/img/pdf_01.png"),
    contents: `
`,
  },
  {
    number: 2,
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
    number: 3,
    title: "Vuestagram",
    content:
      "React로 구성된 Instagram을 Vue로 리팩토링 한 프로젝트입니다. 반응형으로 제작되었으며, login, 피드 작성 및 팔로우 등 기능을 구현하였습니다.",
    project: `#Vue3, #Vuex, #Javascript, #Scss, #Node.js, #Express, #MySql, #JWT-token, #Axios, #FaceBook-Auth`,
    gitUrl: "https://github.com/SoominYim/vuestagram",
    url: "https://vuestagram-dusky.vercel.app",
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
            <li>users: 사용자 정보를 저장합니다. 사용자의 이름, 닉네임, 비밀번호 등을 포함합니다.</li>
            <li>follow: 사용자 간의 팔로우 관계를 저장합니다.</li>
            <li>block: 사용자 간의 차단 관계를 저장합니다.</li>
            <li>posts: 게시물 정보를 저장합니다. 게시물의 텍스트 내용과 작성 시간을 포함합니다.</li>
            <li>medias: 미디어 (이미지 또는 비디오) 정보를 저장합니다.</li>
            <li>post_media: 게시물과 미디어 간의 관계를 저장합니다.</li>
            <li>comments: 댓글 정보를 저장합니다. 댓글의 내용과 작성 시간을 포함합니다.</li>
            <li>likes: 좋아요 정보를 저장합니다. 어떤 대상에 대한 좋아요인지, 사용자가 누른 좋아요인지, 그리고 작성 시간을 포함합니다.</li>
          </ul>
        이 데이터베이스 구조를 통해 사용자 간의 관계, 게시물 및 미디어 콘텐츠, 댓글, 좋아요 등의 정보를 효과적으로 관리하고 조회할 수 있습니다.

        `,
  },
  {
    number: 4,
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
    number: 5,
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
    number: 6,
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
    number: 7,
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
