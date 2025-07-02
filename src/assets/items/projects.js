const project = [
  {
    number: 0,
    title: "Elements Position Drag Overlay",
    content: `Ctrl+드래그로 웹 요소의 CSS position 값을 실시간으로 확인하는 크롬 확장`,
    project: `#TypeScript, #Chrome Extension, #Manifest V3, #Vitest, #ESM, #FSD Architecture`,
    gitUrl: "https://github.com/SoominYim/elements-position-drag-overlay",
    url: "https://chromewebstore.google.com/detail/elements-position-drag-ov/hhcokjpdklpgebgklpelpkekgiojnjca",
    // image: require("@/assets/img/elements_overlay_01.png"),
    contents: `
         웹 개발 중 CSS position absolute 요소의 정확한 좌표값을 확인하기 위해 개발한 크롬 확장 프로그램입니다. 개발자, 디자이너, QA 작업에서 요소의 정확한 위치를 빠르게 파악할 수 있도록 도와주는 생산성 도구입니다.
          <span style="font-size:24px">🎯 프로젝트의 주요 기능</span>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>Ctrl+드래그(Mac: Cmd+드래그)로 웹 요소 이동 시 실시간 좌표 표시</li>
            <li>position: absolute 요소만 드래그 가능 (레이아웃 보호)</li>
            <li>left, top, right, bottom 값을 실시간 오버레이로 표시</li>
            <li>스크롤 보정 기능으로 정확한 위치 계산</li>
            <li>모든 웹사이트에서 사용 가능</li>
            <li>웹 데모 버전 별도 제공</li>
          </ul>
          <span style="font-size:24px">📚 스토리보드</span>
          <span style="font-size:20px">📖 크롬 확장 기능</span>
            <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>크롬 웹스토어에서 설치 후 모든 웹사이트에서 사용 가능</li>
              <li>Ctrl+드래그로 position: absolute 요소만 드래그 가능</li>
              <li>드래그 중 요소 위에 좌표값 오버레이 표시</li>
              <li>Ctrl+Shift+Q 단축키로 기능 토글</li>
              <li>확장 아이콘 클릭으로 설정 관리</li>
            </ul>
          <span style="font-size:20px">📖 팝업 설정</span>
            <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>오버레이 위치 설정 (top-left, top-right, bottom-left, bottom-right)</li>
              <li>하이라이트 색상 설정 (Vue 테마 기본값)</li>
              <li>드래그 후 좌표 유지 옵션</li>
              <li>토글 기능 활성화/비활성화</li>
            </ul>
          <span style="font-size:20px">📖 고급 설정 (Options 페이지)</span>
            <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>다크모드 테마 설정</li>
              <li>상세한 색상 커스터마이징</li>
              <li>애니메이션 효과 설정</li>
              <li>키보드 단축키 관리</li>
            </ul>
          <span style="font-size:20px">📖 웹 데모</span>
            <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>독립 실행형 데모로 테스트 가능</li>
              <li>다양한 position 속성 요소로 기능 체험</li>
              <li>Ctrl+드래그로 파란색 테스트 박스 이동</li>
              <li>실시간 좌표값 오버레이 확인</li>
            </ul>
             <span style="font-size:24px">🖥 기술 스택 및 아키텍처</span>
             <span style="font-size:20px">🔔 FSD (Feature-Sliced Design) 아키텍처</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>app/ - 애플리케이션 진입점 (content-main.ts, content.ts)</li>
              <li>entities/ - 오버레이 엔티티 비즈니스 로직</li>
              <li>features/ - 드래그 기능 구현 (drag-manager, hover-manager)</li>
              <li>shared/ - 공통 유틸리티 및 UI 컴포넌트</li>
              <li>popup/ - 확장 팝업 설정 UI</li>
              <li>options/ - 고급 설정 페이지</li>
              <li>_locales/ - 다국어 지원 (한국어, 영어, 일본어, 중국어)</li>
            </ul>
            <span style="font-size:20px">🔔 핵심 기능 구현</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>실시간 드래그 시스템: 마우스 이벤트 처리 및 요소 위치 계산</li>
              <li>스크롤 보정: window.scrollX/Y를 활용한 정확한 좌표 계산</li>
              <li>호버 하이라이트: Ctrl 키 감지 시 드래그 가능 요소 시각적 표시</li>
              <li>토스트 알림: 사용자 피드백을 위한 메시지 시스템</li>
              <li>키보드 단축키: background script와 content script 간 메시지 전달</li>
              <li>Extension Storage API: 사용자 설정 영구 저장</li>
            </ul>
            <span style="font-size:20px">🔔 다중 패키지 매니저 지원</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>npm, yarn, pnpm 모두 지원하는 스크립트 구성</li>
              <li>TypeScript 컴파일 및 자동 파일 복사</li>
              <li>SVG → PNG 아이콘 자동 변환 (Sharp 라이브러리)</li>
              <li>Vitest + jsdom 조합으로 단위 테스트</li>
              <li>개발 서버 내장 (CORS 이슈 해결)</li>
            </ul>
            <span style="font-size:20px">🔔 Chrome Extension Manifest V3</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>Service Worker 기반 백그라운드 스크립트</li>
              <li>Content Script로 모든 웹페이지에 기능 주입</li>
              <li>Storage, ActiveTab 권한으로 최소 권한 원칙</li>
              <li>다국어 지원을 위한 i18n API 활용</li>
              <li>Commands API로 키보드 단축키 등록</li>
            </ul>
            <span style="font-size:24px">🛠 개발 과정에서의 트러블슈팅</span>
            <span style="font-size:20px">🔔 스크롤 보정 이슈</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>문제: 페이지 스크롤 시 드래그 좌표 계산 오차 발생</li>
              <li>해결: scrollDelta 계산 로직 구현하여 스크롤 오프셋 보정</li>
              <li>결과: 스크롤 위치와 관계없이 정확한 요소 위치 표시</li>
            </ul>
            <span style="font-size:20px">🔔 FSD 아키텍처 적용</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>문제: 기능별 코드 분산으로 유지보수 어려움</li>
              <li>해결: Feature-Sliced Design 패턴 도입하여 모듈화</li>
              <li>결과: 기능별 독립성 확보 및 테스트 용이성 향상</li>
            </ul>
            <span style="font-size:20px">🔔 크롬 확장 권한 최적화</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>문제: 과도한 권한 요청으로 사용자 신뢰도 저하</li>
              <li>해결: storage와 activeTab만 사용하여 최소 권한 구현</li>
              <li>결과: 사용자 개인정보 보호 및 보안성 향상</li>
            </ul>
            <span style="font-size:20px">🖨프리뷰</span>
        `,
  },
  //  <div style="text-align:center">
  //                 크롬 웹스토어
  //                 <img style="width : 100%; border-radius: 10px;"src="${require("../img/elements_overlay_02.png")}"/>
  //                 <br/>
  //                 팝업 설정
  //                 <img style="width : 100%; border-radius: 10px;"src="${require("../img/elements_overlay_03.png")}"/>
  //                 <br/>
  //                 드래그 기능 시연
  //                 <img style="width : 100%; border-radius: 10px;"src="${require("../img/elements_overlay_04.gif")}"/>
  //                 <br/>
  //                 웹 데모
  //                 <img style="width : 100%; border-radius: 10px;"src="${require("../img/elements_overlay_05.png")}"/>
  //           </div>
  {
    number: 1,
    title: "Mevie",
    content: `Vue.js 3.X를 사용하여 개발된 영화검색 웹 애플리케이션`,
    project: `#Vue3, #Vuex, #VueRouter, #Javascript, #Scss, #Axios`,
    gitUrl: "https://github.com/SoominYim/Mevie",
    url: "https://mevie.vercel.app/",
    image: require("@/assets/img/mevie_01.png"),
    contents: `
         이 애플리케이션은 사용자가 원하는 영화를 검색하고 해당 영화에 대한 정보를 제공하는 기능을 제공하며. TMDB API를 활용하여 영화 데이터를 가져와 사용자에게 제공합니다.
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
                  <img style="width : 100%; border-radius: 10px;"src="${require("../img/mevie_02.png")}"/>
                  로고
                  <br/>
                  <img style="width : 100%; border-radius: 10px;"src="${require("../img/mevie_03.png")}"/>
                  메인 페이지
                  <br/>
                  <img style="width : 100%; border-radius: 10px;"src="${require("../img/mevie_04.png")}"/>
                  상세 페이지
                  <br/>
                  <img style="width : 100%; border-radius: 10px;"src="${require("../img/mevie_05.png")}"/>
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
                  <img style="width : 100%; border-radius: 10px;"src="${require("../img/mevie_07.png")}"/>
                  <img style="width : 100%; border-radius: 10px;"src="${require("../img/mevie_08.png")}"/>
                  <br/>
                  상세 페이지
                  <img style="width : 100%; border-radius: 10px;"src="${require("../img/mevie_09.png")}"/>
                  <br/>
                  검색 페이지
                  <img style="width : 100%; border-radius: 10px;"src="${require("../img/mevie_10.png")}"/>
                  <br/>
                  모바일
                  <img style="width : 100%; border-radius: 10px;"src="${require("../img/mevie_11.png")}"/>
            </div>

        `,
  },

  {
    number: 2,
    title: "PDF TO SVG HTML",
    content: "PDF Viewer 및 SVG or canvas & HTML Convert 웹 애플리케이션",
    project: `#Vue3, #Javascript, #Scss, #Node.js, #Express`,
    gitUrl: "https://github.com/SoominYim/pdf-to-svg-html",
    url: null,
    image: require("@/assets/img/pdf_01.png"),
    contents: `
          PDF Viewer 및 SVG or canvas 형태의 HTML로 Convert 하여 PDF에 원하는 페이지를 로컬에 저장할 수 있는 웹 애플리케이션입니다. 이 애플리케이션은 Vue3의 Composition API로 작성되었으며, 스타일링에는 SCSS를 사용했습니다. 서버 측에서는 Node.js와 Express를 사용하여 구현되었습니다.

          <span style="font-size:24px">📚 스토리보드</span>
          <span style="font-size:20px">📖 초기 화면</span>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>저장 할 Page를 선택 할 방식을 Select 합니다. (Default: 개별 선택, 범위 선택)</li>
            <li>파일 첨부 Button을 클릭하여 PDF 파일 업로드 합니다.</li>
            <li>파일이 서버에 업로드 될 때 로딩화면이 보여집니다.</li>
          </ul>
          <span style="font-size:20px">📖 업로드 후 공통</span>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>Page Input에 원하는 Page number를 입력 후 Enter keydown 시 그 Page로 이동합니다.</li>
            <li>Scale은 -,+ button으로 조절 가능하며, Ctrl + 마우스휠, Ctrl + - or + keydown으로도 조절이 가능합니다.</li>
            <li>Page input 숫자만 입력 가능하며 Total page를 넘을 수 없습니다.</li>
            <li>Page에 Text를 드래그할 수 있습니다.</li>
            <li>내보내기 클릭 시 현재 Scale의 퍼센트로 저장이 됩니다.</li>
            <li>Directory 구조
            📁 최상위 폴더
            ├── 📁 js 폴더
            │   ├── page1.js
            │   ├── page2.js
            │   └── ...
            ├── 📁 svg 폴더
            │   ├── page1.svg
            │   ├── page2.svg
            │   └── ...
            ├── common.css
            ├── page1.html
            ├── page2.html
            └── ...
            </li>
          </ul>
          <span style="font-size:20px">📖 개별선택</span>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>Header의 내용이 현재 업로드된 PDF, Page, Scale, 선택된 Page, 선택 Button, 내보내기 버튼으로 변경됩니다.</li>
              <li>Prev, Next button으로 Page 이동이 가능합니다.</li>
              <li>내보내기를 원하는 Page를 선택 Button으로 선택할 수 있습니다.</li>
              <li>선택된 Page는 Drop down box에서 확인할 수 있습니다.</li>
              <li>Drop down box에서 Page 선택시 그 Page로 이동합니다.</li>
              <li>Delete button 클릭 시 선택을 취소 할수 있습니다.</li>
              <li>내보내기 클릭 시 선택된 Page가 zip형식으로 패키징되어 다운로드 됩니다.</li>
              <li>선택을 하지 않고 내보내기 클릭 시 현재 Page가 다운로드 됩니다.</li>
          </ul>
          <span style="font-size:20px">📖 범위선택</span>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
              <li>Header의 내용이 현재 업로드된 PDF, total Page, Page 범위, Scale, 내보내기 버튼으로 변경됩니다.</li>
              <li>원하는 Page 범위를 input에 입력 후 Enter key시 Page가 보여집니다. (Default : 1/1)</li>
              <li>Page가 렌더링 될때 로딩화면이 보여집니다.</li>
              <span style="color : red;"> * 주의사항 : Page 렌더링 중에 내보내기 시 Text layer가 표시 되지 않습니다.</span>
          </ul>
          <span style="font-size:24px">🖥 기능 구현</span>
            <span style="font-size:20px">🔔Upload</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
                <span style="font-size:18px">💻클라이언트</span>
                <li>File Upload시 formDate를 담아 서버에 Post요청 (/upload)
                - 업로드중엔 로딩화면을 유지
                - 업로드가 완료되면 파일과 pdf.js 라이브러리를 사용하여 PDF를 화면에 표시
                ** <span style="color : red;">주요 사항</span>
                1. FileInput의 name 속성을 통해 서버에 요청
                2. 개별선택, 범위선택 시에 화면구성, Page 수집방법이 달라야함
                </li>
                <span style="font-size:18px">💻서버</span>
                <li>multer 모듈을 활용하여 전달받은 request(formData)를 저장
                - fs 모듈을 활용하여 새로운 PDF를 전달 받으면 기존 PDF를 삭제
                - response를 end 하여 요청을 종료
                </li>
              </ul>
              <span style="font-size:20px">🔔Viewer</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
                <span style="font-size:18px">💻클라이언트</span>
                <li>Pagination 구현
                  - 개별선택 : prev, next button, input을 사용
                  - 범위선택 : start, end input을 사용
                </li>
                <li>Scale 구현
                  - + - button, ctrl + wheel, + - keydown 으로 조절
                  ** <span style="color : red;">주요 사항</span>
                  1. 브라우저의 축소확대 기능을 비활성화 (브라우저의 확대를 사용하면 pdf가 깨짐)
                    &nbsp;- eventListener에 preventDefault 적용
                    &nbsp;- wheel eventListener 인자에 { passive: false }를 추가
                  2. 현재의 Scale 값으로 Page Export
                </li>
                <li>사용자가 Export할 Page 선택
                  - 개별선택 : 직접 Page를 선택 및 제거 (선택된 Page 표시) 
                  - 범위선택 : 현재 보고있는 Pages 자동 선택
                </li>
              </ul>
              <span style="font-size:20px">🔔Export</span>
              <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
                <span style="font-size:18px">💻클라이언트</span>
                  <li>선택된 Pages를 pageData에 담아 Json 형식으로 서버에 post (/convert) 요청
                   ** <span style="color : red;">주요 사항</span>
                    &nbsp;1. pageData는 JSON.stringify를 사용하여 json 문자열로 변환하여 body에 포함하여 post
                  </li>
                  <li>zip 라이브러리를 사용, zip 객체 생성</li>
                  <li>현재 Node를 Clone 하여 필요없는 내용을 제거 후에 blob 후 zip객체에 push
                    - elements, classes, style 등 제거
                  </li>
                  <li>/convert 요청이 종료 후에 svg file을 get (/getSVGFile) 요청
                    - 요청중엔 로딩화면을 유지
                    ** <span style="color : red;">주요 사항</span>
                      &nbsp;1. await을 사용하여 /convert => /getSVGFile 순으로 요청
                      &nbsp;2. response를 json으로 받아온 후 SVG File을 blob 후 zip객체에 push
                  </li>
                  <li>js, common css 동적 생성 후 zip객체에 push</li>
                  <li>모든 요청이 종료 후에 비동기로 zip을 generate 하여 패키징 된 zip file을 다운로드
                    ** <span style="color : red;">주요 사항</span>
                      &nbsp;1. svg 파일도 패키징 되어야 함
                      &nbsp;2. getSVG 요청이 종료된 후에 zip.generate되어야 하기때문에 getSVG요청에 await키워드 추가후 비동기로 generate해야함
                  </li>
                  <span style="font-size:18px">💻서버</span>
                  <li>request(pageData)로 요청받은 Page만 SVG로 변환</li>
                  <li>서버에 내장되어 있는 PDF to SVG 프로그램을 실행
                    - 실행을 위해 child_process모듈의 exec() 함수를 사용하여 batch 명령어를 동적으로 실행
                    ** <span style="color : red;">주요 사항</span>
                    &nbsp;1. shell에서 한국어가 깨지기 떄문에 'chcp 65001' command 통해 UTF-8로 변경
                    &nbsp;2. exec는 비동기 함수이기 때문에 command가 끝나지 않아도 convert 요청을 종료하는 버그 발생
                    <span style="color : red;">해결방법</span> : command를 promise 배열에 push 후 await과 promise.all을 사용하여 커맨드가 전부 입력 되고 난뒤 요청을 종료
                  </li>
                  <li>convert 요청 종료 후 getSVGFile get 요청에 응답
                    - 생성된 svg 파일을 json 형식으로 클라이언트에게 전달
                    ** <span style="color : red;">주요 사항</span>
                    &nbsp;1. 클라이언트에게 전달이 완료된 후엔 서버에 저장된 SVG파일 제거
                    </li>
                </ul>
                <span style="font-size:20px">🖨프리뷰</span>
                <div style="text-align:center">
                      초기 화면
                      <img style="width : 100%; border-radius: 10px;"src="${require("../img/pdf_02.png")}"/>
                      <br/>
                      로딩 화면
                      <img style="width : 100%; border-radius: 10px;"src="${require("../img/pdf_04.png")}"/>
                      <img style="width : 100%; border-radius: 10px;"src="${require("../img/pdf_05.png")}"/>
                      <br/>
                      개별선택 화면
                      <img style="width : 100%; border-radius: 10px;"src="${require("../img/pdf_03.png")}"/>
                      <img style="width : 100%; border-radius: 10px;"src="${require("../img/pdf_06.gif")}"/>
                      <br/>
                      범위선택 화면
                      <img style="width : 100%; border-radius: 10px;"src="${require("../img/pdf_07.png")}"/>
                </div>
              `,
  },
  {
    number: 3,
    title: "Mini_Mate",
    content: "Tools web",
    project: `#Nuxt3, #Pinia, #Typescript ,#Javascript, #Scss`,
    gitUrl: "https://github.com/SoominYim/MiniMate",
    url: "https://mini-mate-s.vercel.app",
    image: require("@/assets/img/mini.png"),
    contents: `
        이 애플리케이션은 사용자가 점심 뽑기, 사다리타기, 게임 등의 기능들을 사용할 수 있는 툴들을 모아둔 웹애플리케이션입니다.
          <span style="font-size:24px">🎞 페이지를 만든 이유</span>
          <span>점심이나, 커피를 뽑을 사람 등 일상 생활에서 필요로한 뽑기를 만들면서, 뽑기뿐만이 아닌 작업중에 필요한것이나, 킬링타임용 게임 등 제가 원하는 것들을 모두 만들어보고 싶어 제작하게 되었습니다.
          </span>
          <span style="font-size:24px">🖥 스토리보드 및 기능구현</span>
          <div style="text-align:center">
            <span style="font-size:20px">날씨</span>
            <img style="width : 100%; border-radius: 10px;"src="${require("../img/minimate_01.png")}"/>
          </div>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>OpenWeatherMap API를 사용하여 날씨 정보를 받아옵니다.</li>
            <li>날씨(비, 눈 애니메이션), 시간에 따라 Background 색상이 변경 됩니다.</li>
            <li>초기 화면에선 오늘 날씨와 날짜에 맞는 날씨, 추후 날짜의 날씨가 표시됩니다.</li>
            <li>날짜를 클릭시엔 강수 확률, 강수량, 바람의 강도, 습도를 표시합니다.</li>
          </ul>
          <div style="text-align:center">
            <span style="font-size:20px">점심 뽑기</span>
            <img style="width : 100%; border-radius: 10px;"src="${require("../img/minimate_02.gif")}"/>
          </div>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>오늘의 점심을 뽑습니다.</li>
            <li>한식, 중식, 일식, 양식, 아시안 중 선택하여 음식을 고를 수 있습니다.</li>
            <li>원하지 않는다면 다시 뽑을 수 있습니다.</li>
          </ul>
          <div style="text-align:center">
            <span style="font-size:20px">커피 뽑기</span>
            <img style="width : 100%; border-radius: 10px;"src="${require("../img/minimate_03.gif")}"/>
          </div>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>커피를 살 인원을 뽑습니다.</li>
            <li>인원을 추가하거나 제거 할 수 있습니다.(중복 ❌)</li>
            <li>2명 이상이 될 경우 뽑기를 진행할 수 있습니다.</li>
            <li>원하지 않는다면 다시 뽑을 수 있습니다.</li>
          </ul>
          <div style="text-align:center">
            <span style="font-size:20px">사다리타기</span>
            <img style="width : 100%; border-radius: 10px;"src="${require("../img/minimate_04.gif")}"/>
          </div>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>사다리 타기를 진행합니다.</li>
            <li>3 ~ 12명의 인원을 선택할 수 있습니다.</li>
            <li>내기는 커스텀 할 수 있으며, 자동내기 클릭 시에 꽝 1명과 나머지는 당첨을 선택합니다.</li>
            <li>시작하기 클릭 후 최상단의 아이템을 클릭시 그 아이템의 색상이 사다리를 탑니다.</li>
          </ul>
          <div style="text-align:center">
            <span style="font-size:20px">오목(진행중)</span>
            <img style="width : 100%; border-radius: 10px;"src="${require("../img/minimate_05.gif")}"/>
          </div>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>오목을 진행합니다.</li>
            <li>흑돌이 선을 잡고 플레이합니다.</li>
            <li>먼저 오목을 만드는 인원이 승리합니다.</li>
            <li>승리 후엔 돌을 둘 수 없으며, 다시하기를 클릭하여 게임을 다시 합니다.</li>
          </ul>
          <span style="font-size:20px">기능 추가 예정</span>
          <ul style="position: relative; left: 15px; width: 100%; line-height: 2.1; text-align: left; list-style: disc;">
            <li>렌주룰을 적용합니다.(흑돌은 33, 6목, 44가 불가능 합니다.)</li>
            <li>UI 개선</li>
            <li>무르기 기능 추가</li>
            <li>가능하다면 socket.io를 통한 멀티 플레이 기능</li>
          </ul>
        `,
  },
  {
    number: 4,
    title: "Vuestagram",
    content:
      "React로 구성된 Instagram을 Vue로 리팩토링 한 프로젝트. 반응형으로 제작되었으며, login, 피드 작성 및 팔로우 등 기능을 구현.",
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
            <img style="width : 100%; border-radius: 10px;"src="${require("../img/vuestagram_01.png")}"/>
            메인(로그인) 페이지
            <br/>
            <img style="width : 100%; border-radius: 10px;"src="${require("../img/vuestagram_02.png")}"/>
            회원가입 페이지
            <br/>
            <img style="width : 100%; border-radius: 10px;"src="${require("../img/vuestagram_03.png")}"/>
            로그인 후 피드
            <br/>
            <img style="width : 100%; border-radius: 10px;"src="${require("../img/vuestagram_04.png")}"/>
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
    number: 5,
    title: "Today_Lunch",
    content: "오늘 점심 뭐먹지",
    project: `#Vue3, #Vuex, #Javascript, #Scss`,
    gitUrl: "https://github.com/SoominYim/today-lunch",
    url: "https://soominyim.github.io/today-lunch",
    image: require("@/assets/img/today-lunch.png"),
    contents: `매일 점심 정하기가 귀찮아 만들어 본 랜덤 메뉴정하기
        <img style="width : 100%; border-radius: 10px;"src="${require("../img/today-lunch.png")}"/>
        원하는 음식이 나올때마다 누르는 한국인의 정서를 없애기 위해
        첫 째로 나온 음식이후엔 선택이 되지 않게 했다.
        랜덤 로직을 직접 짜는게 가장 오래 걸렸다.
        각 country로 랜덤으로 뽑아 배열의 푸시하는 방식으로 로직을 구성하였다.
`,
  },
  {
    number: 6,
    title: "Todo",
    content: `fire-base에 저장 되는 나만의 Todo List`,
    project: `#React, #Javascript, #Scss, #Firebase, #GoogleAuth`,
    gitUrl: "https://github.com/SoominYim/reactTodo",
    url: null,
    image: require("@/assets/img/reactTodoImg.png"),
    contents: `초기 리액트 공부를 위해 만들었던 TODO LIST
        <img style="width : 100%; border-radius: 10px;"src="${require("../img/reactTodoImg.png")}"/>
        `,
  },
  {
    number: 7,
    title: "Js_Tetris",
    content: `간단한 웹 테트리스`,
    project: `#Html, #Javascript, #Css`,
    gitUrl: "https://github.com/SoominYim/tetris",
    url: "https://soominyim.github.io/tetris/",
    image: require("@/assets/img/tetrisImg.png"),
    contents: `Html, Css, Js만을 사용한 테트리스.
        <img style="width : 100% ;border-radius: 10px;"src="${require("../img/tetrisImg.png")}"/>
        지금 봐도 낭만이 있다.
        Moving Blocks : ← →
        Block Change Direction : ↑
        Slow Drop: ↓
        Fast Drop : Space bar
        간단한 기능까지 구현 했다.`,
  },
  {
    number: 8,
    title: "Vue-Tetris",
    content: "휴대용 게임기처럼 만든 테트리스",
    project: `#Vue2.X, #Javascript, #Less, #Vuex`,
    gitUrl: "https://github.com/SoominYim/vue-tetris",
    url: "https://soominyim.github.io/vue-tetris/",
    image: require("@/assets/img/vue-tetris.png"),
    contents: `기존의 구현했던 테트리스와는 다르게 좀 더 퀄리티 있는 
        테트리스 게임을 만들고 싶었다.
         <img style="width : 100% ;border-radius: 10px;"src="${require("../img/vue-tetris.png")}"/>
        모바일에서도 즐길 수 있게 native하게 구성되었다.
        level, sound, pause, start Line 구성, 다음에 나올 block 등등의 기능들을 
        추가하여 온전한 미니게임으로 즐길 수 있다.
         `,
  },
];

export default project;
