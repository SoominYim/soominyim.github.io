const project = [
  {
    number: 0,
    title: "Elements Position Drag Overlay",
    content: `Ctrl+드래그로 웹 요소의 CSS position 값을 실시간으로 확인하는 크롬 확장`,
    project: `#TypeScript, #Chrome Extension, #Manifest V3, #Vitest, #FSD Architecture`,
    gitUrl: "https://github.com/SoominYim/elements-position-drag-overlay",
    url: "https://chromewebstore.google.com/detail/elements-position-drag-ov/hhcokjpdklpgebgklpelpkekgiojnjca",
    image: require("@/assets/img/elements_overlay_01.png"),
    contents: `
        <vue-component name="ProjectDetailSection" props='{"title":"프로젝트 개요","icon":"📋"}'>
          <p>
            <code>Ctrl+드래그</code>(Mac: <code>Cmd+드래그</code>)로 웹 요소의 CSS position 값을 실시간으로 표시하는 크롬 확장 프로그램입니다. 
            웹 개발 시 <code>position: absolute</code> 요소의 위치 조정을 위해 개발자 도구에서 수치를 반복 수정하는 비효율적인 과정을 개선하고자 개발하였습니다.
          </p>
          <vue-component name="ProjectHighlightBox" props='{"title":"🎯 Chrome Web Store 정식 배포"}'>
            <p>개발팀에서 실제 업무에 활용되고 있는 도구입니다.</p>
          </vue-component>
        </vue-component>

        <vue-component name="ProjectDetailSection" props='{"title":"개발 배경","icon":"🎯"}'>
          <p>
            회사에서 모달, 드롭다운, 툴팁, 아이콘 등 <code>position: absolute</code> 요소를 빈번히 사용하게 되었습니다. 
            매번 개발자 도구에서 CSS 값을 수정하며 위치를 맞추는 과정을 하루에 수십 번 반복하는 것이 매우 비효율적이었습니다.
          </p>
          <p>
            "드래그해서 실시간으로 좌표를 보면서 조정할 수 있으면 얼마나 좋을까?"라는 생각에서 시작하여 직접 개발하게 되었습니다.
          </p>
        </vue-component>

        <vue-component name="ProjectDetailSection" props='{"title":"핵심 기능","icon":"🚀"}'>
          <vue-component name="ProjectTechList" props='{"type":"feature-list"}'>
            <li><strong>드래그 인터페이스:</strong> <code>Ctrl+드래그</code> (Mac: <code>Cmd+드래그</code>)로 웹 요소 이동</li>
            <li><strong>실시간 좌표 표시:</strong> 드래그 중 실시간으로 CSS position 값 오버레이 표시</li>
            <li><strong>요소 감지:</strong> <code>position: absolute</code> 또는 <code>position: fixed</code> 요소 자동 감지</li>
            <li><strong>토글 기능:</strong> <code>Ctrl + Shift + Q</code>로 확장 기능 On/Off</li>
            <li><strong>다국어 지원:</strong> 한국어, 영어, 일본어, 중국어(간체) 지원</li>
          </vue-component>
        </vue-component>

      <div class="project-detail-section">
        <h2><span class="emoji-icon">🛠</span>기술 스택 및 아키텍처</h2>
        
        <h3>기술 스택 선택</h3>
        <p>
          모든 웹사이트에서 사용할 수 있도록 크롬 확장 프로그램으로 개발하였습니다. 
          TypeScript를 선택한 이유는 크롬 확장 API의 타입 정의가 잘 되어 있어 개발 효율성이 높았기 때문입니다.
        </p>
        <ul class="tech-list">
          <li><strong>TypeScript</strong> - 타입 안전성 및 Chrome Extension API 타입 지원</li>
          <li><strong>Chrome Extension API</strong> - Manifest V3, Content Scripts, Storage API</li>
          <li><strong>FSD (Feature-Sliced Design)</strong> - 아키텍처 패턴 적용</li>
        </ul>

        <h3>FSD 아키텍처 적용</h3>
        <p>
          항해99에서 학습한 FSD 아키텍처를 크롬 확장에 적용하였습니다. 
          작은 프로젝트였지만 FSD를 적용함으로써 코드 구조가 명확해지고 기능 추가가 용이해졌습니다.
        </p>

        <h4>각 영역의 역할</h4>
        <vue-component name="ProjectCardLayout">
          <vue-component name="ProjectCard" props='{"title":"App 레이어","icon":"📁"}'>
            <vue-component name="ProjectTechList" props='{"type":"tech-list"}'>
              <li><strong>content-main.ts:</strong> Content Script 메인 진입점</li>
              <li><strong>content.ts:</strong> 웹페이지 DOM 조작 로직</li>
            </vue-component>
          </vue-component>
          <vue-component name="ProjectCard" props='{"title":"Features 레이어","icon":"📁"}'>
            <vue-component name="ProjectTechList" props='{"type":"tech-list"}'>
              <li><strong>drag-manager:</strong> 드래그 상태 및 이벤트 관리</li>
              <li><strong>hover-manager:</strong> 호버 하이라이트 관리</li>
            </vue-component>
          </vue-component>
          <vue-component name="ProjectCard" props='{"title":"Shared 레이어","icon":"📁"}'>
            <vue-component name="ProjectTechList" props='{"type":"tech-list"}'>
              <li><strong>position-utils:</strong> 위치 계산 유틸리티</li>
              <li><strong>extension-config:</strong> 확장 설정 관리</li>
            </vue-component>
          </vue-component>
        </vue-component>

        <h4>다중 진입점 아키텍처</h4>
        <p>Chrome Extension의 특성상 여러 컨텍스트에서 실행되는 구조를 체계적으로 관리하였습니다:</p>
        <ul class="tech-list">
          <li><strong>Content Script (app/):</strong> 실제 웹페이지에 주입되어 드래그 기능 제공</li>
          <li><strong>Popup (popup/):</strong> 확장 아이콘 클릭 시 나타나는 빠른 설정 인터페이스</li>
          <li><strong>Options (options/):</strong> 크롬 확장 관리 페이지에서 접근하는 상세 설정</li>
          <li><strong>Background Script:</strong> 확장 생명주기 관리 및 전역 상태 보존</li>
          <li><strong>Demo (demo/):</strong> 확장 설치 전 기능 체험을 위한 독립 웹페이지</li>
        </ul>
        
        <vue-component name="ProjectInfoBox" props='{"title":"프로젝트 구조"}'>
          <pre><code>src/
├── 📁 app/                    # 애플리케이션 레이어
│   ├── content-main.ts        # Content Script 메인 진입점
│   └── content.ts             # 콘텐츠 스크립트 로직
├── 📁 entities/               # 엔티티 레이어 (비즈니스 객체)
│   └── overlay/               # 좌표 오버레이 엔티티
│       └── index.ts           # 오버레이 생성/업데이트/제거
├── 📁 features/               # 피처 레이어 (비즈니스 로직)
│   └── drag/                  # 드래그 앤 드롭 기능
│       ├── index.ts           # 외부 인터페이스
│       └── lib/               # 내부 구현
│           ├── drag-manager.ts    # 드래그 상태 및 이벤트 관리
│           ├── hover-manager.ts   # 호버 하이라이트 관리
│           └── index.ts           # 라이브러리 내보내기
├── 📁 shared/                 # 공유 레이어 (공통 유틸)
│   ├── index.ts               # 공용 API
│   ├── lib/                   # 유틸리티 함수들
│   │   ├── extension-config.ts    # 확장 설정 관리
│   │   ├── position-utils.ts      # 위치 계산 유틸
│   │   └── index.ts               # 라이브러리 모음
│   ├── types/                 # 타입 정의
│   │   └── index.ts           # 전역 타입들
│   └── ui/                    # 공용 UI 컴포넌트
│       └── toast.ts           # 토스트 알림 컴포넌트
├── 📁 popup/                  # 팝업 UI (별도 진입점)
│   ├── popup.html             # 팝업 HTML 구조
│   ├── popup.css              # 팝업 스타일
│   └── popup.ts               # 팝업 로직 (설정 관리)
├── 📁 options/                # 옵션 페이지 (별도 진입점)
│   ├── options.html           # 옵션 페이지 HTML
│   ├── options.css            # 옵션 페이지 스타일
│   └── options.ts             # 고급 설정 관리
├── 📁 demo/                   # 웹 데모 (독립 실행)
│   └── demo.ts                # 웹페이지용 데모 로직
├── 📁 _locales/               # 다국어 지원
│   ├── en/messages.json       # 영어
│   ├── ko/messages.json       # 한국어
│   ├── ja/messages.json       # 일본어
│   └── zh_CN/messages.json    # 중국어 간체
├── 📁 icons/                  # 아이콘 파일들
│   ├── icon.svg               # 소스 SVG
│   ├── icon16.png             # 16x16 크롬 확장용
│   ├── icon48.png             # 48x48 크롬 확장용
│   └── icon128.png            # 128x128 크롬 확장용
├── 📁 __tests__/              # 테스트 파일들
│   ├── dragUtils.test.ts      # 드래그 유틸 테스트
│   ├── integration.test.ts    # 통합 테스트
│   └── toast.test.ts          # 토스트 UI 테스트
├── index.html                 # 웹 데모 페이지
├── index.js                   # 웹 데모 진입점
├── background.ts              # 백그라운드 스크립트
└── app-icon.png               # 앱 아이콘</code></pre>
        </vue-component>

        <h3>FSD 아키텍처의 장점</h3>
        <p>작은 프로젝트였지만 FSD를 적용함으로써 다음과 같은 장점을 얻을 수 있었습니다:</p>
        <ul class="tech-list">
          <li><strong>기능 추가 용이성:</strong> 새로운 feature 추가 시 기존 코드에 영향 없이 독립적 개발</li>
          <li><strong>테스트 작성 편의성:</strong> 각 기능이 격리되어 있어 단위 테스트 작성 수월</li>
          <li><strong>코드 파악 용이성:</strong> 몇 개월 후에도 어디에 무엇이 있는지 빠르게 파악 가능</li>
          <li><strong>다중 진입점 관리:</strong> popup, options, demo가 shared 레이어를 공통 사용하여 중복 코드 최소화</li>
        </ul>
      </div>

      <div class="project-detail-section">
        <h2><span class="emoji-icon">💻</span>개발 과정 및 기술적 도전</h2>
        
        <h3>1. 정밀한 좌표 계산 시스템 구현</h3>
        <p>
          웹페이지의 스크롤 위치, 브라우저 확대/축소, 중첩된 스크롤 컨테이너 등을 고려한 정확한 좌표 계산이 가장 큰 도전이었습니다.
        </p>
        <div class="card-layout">
          <div class="highlight-box">
            <h4>좌표 계산 알고리즘</h4>
            <ul class="tech-list">
              <li><strong>클라이언트 좌표계:</strong> <code>event.clientX/Y</code> 기반 뷰포트 상대 위치</li>
              <li><strong>페이지 좌표계:</strong> <code>window.scrollX/Y</code> 포함 문서 전체 기준</li>
              <li><strong>요소 좌표계:</strong> <code>getBoundingClientRect()</code> 활용 요소 상대 위치</li>
              <li><strong>CSS 좌표계:</strong> <code>position: absolute</code> 기준 최종 CSS 값 산출</li>
            </ul>
          </div>
          <div class="info-box">
            <h4>스크롤 오프셋 보정</h4>
            <ul class="tech-list">
              <li><strong>동적 스크롤 추적:</strong> 드래그 중 스크롤 변화 실시간 감지</li>
              <li><strong>다중 컨테이너 대응:</strong> 중첩된 스크롤 영역 처리</li>
              <li><strong>브라우저 확대/축소:</strong> zoom 레벨 변화 자동 대응</li>
            </ul>
          </div>
        </div>

        <h3>2. Chrome Extension API 아키텍처 설계</h3>
        <p>
          Chrome Extension의 다중 컨텍스트 구조에서 효율적인 통신과 상태 관리를 구현하였습니다.
        </p>
        <div class="highlight-box">
          <h4>컨텍스트 분리 및 통신</h4>
          <ul class="tech-list">
            <li><strong>Content Script:</strong> 웹페이지 DOM 직접 조작 및 드래그 이벤트 처리</li>
            <li><strong>Background Script:</strong> 확장 생명주기 관리 및 설정 상태 보존</li>
            <li><strong>Popup Interface:</strong> 즉시 접근 가능한 설정 변경 인터페이스</li>
            <li><strong>Options Page:</strong> 상세 설정 및 고급 옵션 관리</li>
            <li><strong>메시지 패싱:</strong> <code>chrome.runtime.sendMessage</code> API 활용 안전한 통신</li>
          </ul>
        </div>

        <h3>3. 성능 최적화 및 사용자 경험 개선</h3>
        <div class="card-layout">
          <div class="card">
            <h4>이벤트 처리 최적화</h4>
            <ul class="tech-list">
              <li><strong>Throttling 적용:</strong> 마우스 이동 이벤트 과도한 호출 방지</li>
              <li><strong>RAF 활용:</strong> <code>requestAnimationFrame</code>으로 부드러운 애니메이션</li>
              <li><strong>메모리 관리:</strong> 페이지 이동 시 이벤트 리스너 자동 정리</li>
            </ul>
          </div>
          <div class="card">
            <h4>브라우저 호환성</h4>
            <ul class="tech-list">
              <li><strong>키보드 단축키:</strong> Windows/Mac 환경별 단축키 대응</li>
              <li><strong>확대/축소 대응:</strong> 브라우저 기본 확대 기능과 충돌 방지</li>
              <li><strong>반응형 오버레이:</strong> 다양한 화면 크기 대응</li>
            </ul>
          </div>
        </div>

        <h3>4. 보안 및 권한 관리</h3>
        <p>
          최소 권한 원칙을 적용하여 사용자 신뢰도를 확보하고 빠른 심사 통과를 달성하였습니다.
        </p>
        <div class="warning-box">
          <h4>최소 권한 정책</h4>
          <ul class="tech-list">
            <li><strong>필수 권한만 요청:</strong> <code>storage</code>, <code>activeTab</code>만 사용</li>
            <li><strong>사용자 제어:</strong> 사용자가 활성화한 탭에서만 동작</li>
            <li><strong>개인정보 보호:</strong> 어떠한 개인정보도 수집하지 않음</li>
            <li><strong>로컬 저장:</strong> 모든 설정은 로컬 저장소에만 보관</li>
          </ul>
        </div>

        <h3>5. 국제화 시스템 구축</h3>
        <p>
          Chrome Extension i18n API를 활용하여 글로벌 사용자를 대상으로 한 다국어 지원 시스템을 구현하였습니다.
        </p>
        <ul class="tech-list">
          <li><strong>4개 언어 지원:</strong> 한국어, 영어, 일본어, 중국어(간체)</li>
          <li><strong>자동 언어 감지:</strong> 브라우저 언어 설정 기반 자동 적용</li>
          <li><strong>JSON 기반 관리:</strong> 구조화된 번역 데이터 관리</li>
          <li><strong>확장 가능 구조:</strong> 향후 추가 언어 지원 용이</li>
        </ul>
      </div>

      <div class="project-detail-section">
        <h2><span class="emoji-icon">💡</span>개발하면서 느낀 점</h2>
        
        <h3>Chrome Extension API의 복잡성</h3>
        <p>
          웹 개발과는 다른 독특한 구조였습니다. Content Script, Background Script, Popup이 각각 다른 컨텍스트에서 실행되고, 
          메시지 패싱으로 통신해야 했습니다. 처음에는 이해하기 어려웠지만 익숙해지니 꽤 체계적이었습니다.
        </p>

        <h3>사용자 중심 설계의 중요성</h3>
        <p>
          popup과 options 페이지를 만들면서 "개발자 편의 vs 사용자 편의"에 대해 고민하게 되었습니다. 
          결과적으로 사용자 편의를 우선시한 것이 정답이었습니다. 아무리 기능이 좋아도 설정하기 어려우면 사용하지 않게 됩니다.
        </p>

        <h3>사용자 피드백의 중요성</h3>
        <p>
          동료들의 피드백을 통해 "이런 기능도 있으면 좋겠다", "이 부분이 불편하다" 같은 의견을 받으며 
          더 나은 도구로 발전시킬 수 있었습니다.
        </p>
      </div>

      <div class="project-detail-section">
        <h2><span class="emoji-icon">📈</span>프로젝트 성과</h2>
        
        <h3>1. 실제 배포 및 운영 성과</h3>
        <div class="card-layout">
          <div class="card">
            <h4>🌐 Chrome Web Store 배포</h4>
            <ul class="tech-list">
              <li><strong>정식 서비스:</strong> 실제 개발팀에서 업무에 활용</li>
              <li><strong>빠른 심사 통과:</strong> 최소 권한 정책으로 신속한 승인</li>
              <li><strong>사용자 신뢰:</strong> 개인정보 수집 없는 투명한 운영</li>
            </ul>
          </div>
          <div class="card">
            <h4>🔒 보안 및 권한 관리</h4>
            <ul class="tech-list">
              <li><strong>최소 권한 원칙:</strong> storage, activeTab만 요청</li>
              <li><strong>사용자 제어:</strong> 활성 탭에서만 동작</li>
              <li><strong>데이터 보호:</strong> 모든 설정 로컬 저장</li>
            </ul>
          </div>
          <div class="card">
            <h4>🌍 글로벌 접근성</h4>
            <ul class="tech-list">
              <li><strong>다국어 지원:</strong> 한/영/일/중 4개 언어</li>
              <li><strong>자동 언어 감지:</strong> 브라우저 설정 기반</li>
              <li><strong>확장 가능:</strong> 추가 언어 지원 준비</li>
            </ul>
          </div>
        </div>

        <h3>2. 사용자 체험 최적화</h3>
        <div class="highlight-box">
          <h4>웹 데모 환경 구축</h4>
          <p>
            확장 설치 전 기능을 체험할 수 있는 
            <a href="https://elements-position-drag-overlay.vercel.app/" target="_blank">독립 웹 데모</a>를 Vercel에 배포하였습니다. 
            실제 확장과 동일한 드래그 앤 드롭 기능을 웹페이지에서 미리 체험할 수 있어 사용자 진입 장벽을 낮추었습니다.
          </p>
          <ul class="tech-list">
            <li><strong>즉시 체험:</strong> 설치 없이 바로 기능 확인 가능</li>
            <li><strong>동일한 UI/UX:</strong> 실제 확장과 일치하는 사용자 경험</li>
            <li><strong>반응형 지원:</strong> 다양한 디바이스에서 체험 가능</li>
            <li><strong>마케팅 도구:</strong> 기능 소개 및 사용법 안내</li>
          </ul>
        </div>

        <h3>3. 품질 관리 및 테스트</h3>
        <div class="card-layout">
          <div class="info-box">
            <h4>테스트 전략</h4>
            <ul class="tech-list">
              <li><strong>단위 테스트:</strong> dragUtils.test.ts - 드래그 유틸리티 함수 검증</li>
              <li><strong>통합 테스트:</strong> integration.test.ts - 컴포넌트 간 상호작용 테스트</li>
              <li><strong>UI 테스트:</strong> toast.test.ts - 사용자 인터페이스 기능 검증</li>
              <li><strong>실사용 테스트:</strong> 개발팀 동료들의 실제 업무 환경 테스트</li>
            </ul>
          </div>
          <div class="warning-box">
            <h4>크로스 브라우저 호환성</h4>
            <ul class="tech-list">
              <li><strong>Chrome 기본 지원:</strong> Chrome Extension 네이티브 지원</li>
              <li><strong>Edge 호환:</strong> Chromium 기반 Edge에서 정상 동작</li>
              <li><strong>향후 확장:</strong> Firefox WebExtensions 지원 계획</li>
            </ul>
          </div>
        </div>

        <h3>4. 기술적 학습 성과</h3>
        <div class="highlight-box">
          <h4>핵심 역량 개발</h4>
          <ul class="tech-list">
            <li><strong>Chrome Extension 개발:</strong> Manifest V3 표준, 다중 컨텍스트 프로그래밍</li>
            <li><strong>TypeScript 고급 활용:</strong> Chrome Extension API 타입 정의 활용</li>
            <li><strong>FSD 아키텍처 실무 적용:</strong> 작은 프로젝트에서도 체계적 구조의 장점 확인</li>
            <li><strong>좌표 계산 알고리즘:</strong> 복잡한 웹 환경에서의 정확한 위치 계산</li>
            <li><strong>성능 최적화:</strong> 이벤트 최적화, 메모리 관리, 렌더링 최적화</li>
            <li><strong>국제화 시스템:</strong> i18n API를 활용한 다국어 지원</li>
          </ul>
        </div>

        <h3>5. 사용자 피드백 및 개선</h3>
        <p>
          동료 개발자들의 피드백을 통해 지속적인 개선을 진행하였습니다. 
          "이런 기능도 있으면 좋겠다", "이 부분이 불편하다" 등의 의견을 수렴하여 사용자 중심의 도구로 발전시켰습니다.
        </p>
        <ul class="tech-list">
          <li><strong>사용성 개선:</strong> 개발자 편의보다 사용자 편의 우선</li>
          <li><strong>기능 개선:</strong> 실제 사용 환경에서의 피드백 반영</li>
          <li><strong>UI/UX 최적화:</strong> 직관적인 인터페이스 구현</li>
          <li><strong>성능 개선:</strong> 실사용 환경에서의 성능 최적화</li>
        </ul>

        <h3>6. 향후 발전 계획</h3>
        <div class="info-box">
          <h4>기능 확장 로드맵</h4>
          <ul class="tech-list">
            <li><strong>CSS Grid/Flexbox 지원:</strong> 더 다양한 레이아웃 요소 대응</li>
            <li><strong>Firefox 확장:</strong> WebExtensions API를 통한 Firefox 지원</li>
            <li><strong>고급 설정:</strong> 사용자 커스터마이징 옵션 확장</li>
            <li><strong>협업 기능:</strong> 팀 단위 설정 공유 시스템</li>
            <li><strong>성능 향상:</strong> WebAssembly 활용 고속 계산 엔진</li>
          </ul>
        </div>
      </div>
    `,
  },

  {
    number: 1,
    title: "PDF TO SVG HTML",
    content: "PDF Viewer 및 SVG or canvas & HTML Convert 웹 애플리케이션",
    project: `#Vue3, #Javascript, #Scss, #Node.js, #Express`,
    gitUrl: "https://github.com/SoominYim/pdf-to-svg-html",
    url: null,
    image: require("@/assets/img/pdf_01.png"),
    contents: `
        <vue-component name="ProjectDetailSection" props='{"title":"프로젝트 개요","icon":"📋"}'>
          <p>
            PDF 파일을 업로드하여 <strong>SVG 또는 Canvas 형태의 HTML로 변환</strong>하고, 원하는 페이지를 로컬에 저장할 수 있는 웹 애플리케이션입니다.
            이 애플리케이션은 <strong>Vue3의 Composition API</strong>로 작성되었으며, 스타일링에는 <strong>SCSS</strong>를 사용했습니다. 
            서버 측에서는 <strong>Node.js와 Express</strong>를 사용하여 구현되었습니다.
          </p>
          
          <vue-component name="ProjectHighlightBox" props='{"title":"🏢 실무 배경 및 개발 동기"}'>
            <p>
              <strong>회사 업무에서 e-book 콘텐츠 개발</strong> 과정에서 PDF 원본을 웹용 콘텐츠로 변환해야 하는 업무가 빈번했습니다. 
              기존에는 전체 PDF를 변환하거나, 수동으로 페이지를 캡처하는 비효율적인 방식을 사용했는데, 
              <strong>수백 페이지의 교육 콘텐츠 중 특정 페이지만 필요한 경우가 많아</strong> 효율적인 도구의 필요성을 느꼈습니다.
            </p>
            <vue-component name="ProjectTechList" props='{"type":"tech-list"}'>
              <li><strong>문제점:</strong> 전체 PDF 변환 시 불필요한 파일 생성 및 용량 증가</li>
              <li><strong>기존 방식:</strong> 수동 캡처 → 이미지 편집 → HTML 변환 (시간 소요 과다)</li>
              <li><strong>해결 목표:</strong> 원하는 페이지만 선택하여 바로 웹용 형태로 변환</li>
            </vue-component>
          </vue-component>

          <vue-component name="ProjectInfoBox" props='{"title":"💡 개발 철학"}'>
            <p>
              <strong>"실무에서 겪은 불편함을 직접 해결하는 개발자"</strong><br/>
              단순히 기술을 배우기 위한 토이 프로젝트가 아닌, <strong>실제 업무 효율성을 개선하기 위해 필요에 의해 개발</strong>한 실무형 도구입니다. 
              현재도 팀 내에서 e-book 콘텐츠 제작 시 활용하고 있어 실용성이 검증된 프로젝트입니다.
            </p>
          </vue-component>
        </vue-component>

      <div class="project-detail-section">
        <h2><span class="emoji-icon">📚</span>스토리보드</h2>
        
        <h3><span class="emoji-icon">📖</span>초기 화면</h3>
        <ul class="feature-list">
          <li>저장할 Page를 선택할 방식을 Select 합니다. (Default: 개별 선택, 범위 선택)</li>
            <li>파일 첨부 Button을 클릭하여 PDF 파일 업로드 합니다.</li>
            <li>파일이 서버에 업로드 될 때 로딩화면이 보여집니다.</li>
          </ul>

        <h3><span class="emoji-icon">📖</span>업로드 후 공통</h3>
        <ul class="feature-list">
            <li>Page Input에 원하는 Page number를 입력 후 Enter keydown 시 그 Page로 이동합니다.</li>
            <li>Scale은 -,+ button으로 조절 가능하며, Ctrl + 마우스휠, Ctrl + - or + keydown으로도 조절이 가능합니다.</li>
            <li>Page input 숫자만 입력 가능하며 Total page를 넘을 수 없습니다.</li>
            <li>Page에 Text를 드래그할 수 있습니다.</li>
            <li>내보내기 클릭 시 현재 Scale의 퍼센트로 저장이 됩니다.</li>
        </ul>

        <div class="info-box">
          <h4>내보내기 디렉토리 구조</h4>
          <pre><code>📁 최상위 폴더
            ├── 📁 js 폴더
│   ├── page1.js      # 각 페이지별 JavaScript
            │   ├── page2.js
            │   └── ...
            ├── 📁 svg 폴더
│   ├── page1.svg     # 변환된 SVG 파일
            │   ├── page2.svg
            │   └── ...
├── common.css        # 공통 스타일시트
├── page1.html        # 각 페이지별 HTML
            ├── page2.html
└── ...</code></pre>
        </div>

        <h3><span class="emoji-icon">📖</span>개별선택 모드</h3>
        <ul class="feature-list">
              <li>Header의 내용이 현재 업로드된 PDF, Page, Scale, 선택된 Page, 선택 Button, 내보내기 버튼으로 변경됩니다.</li>
              <li>Prev, Next button으로 Page 이동이 가능합니다.</li>
              <li>내보내기를 원하는 Page를 선택 Button으로 선택할 수 있습니다.</li>
              <li>선택된 Page는 Drop down box에서 확인할 수 있습니다.</li>
              <li>Drop down box에서 Page 선택시 그 Page로 이동합니다.</li>
          <li>Delete button 클릭 시 선택을 취소 할 수 있습니다.</li>
              <li>내보내기 클릭 시 선택된 Page가 zip형식으로 패키징되어 다운로드 됩니다.</li>
              <li>선택을 하지 않고 내보내기 클릭 시 현재 Page가 다운로드 됩니다.</li>
          </ul>

        <h3><span class="emoji-icon">📖</span>범위선택 모드</h3>
        <ul class="feature-list">
              <li>Header의 내용이 현재 업로드된 PDF, total Page, Page 범위, Scale, 내보내기 버튼으로 변경됩니다.</li>
              <li>원하는 Page 범위를 input에 입력 후 Enter key시 Page가 보여집니다. (Default : 1/1)</li>
              <li>Page가 렌더링 될때 로딩화면이 보여집니다.</li>
          </ul>
        <div class="warning-box">
          <p><strong>⚠️ 주의사항:</strong> Page 렌더링 중에 내보내기 시 Text layer가 표시 되지 않습니다.</p>
        </div>
      </div>

      <div class="project-detail-section">
        <h2><span class="emoji-icon">🖥</span>기능 구현</h2>
        
        <h3><span class="emoji-icon">🔔</span>Upload 기능</h3>
        
        <div class="card-layout">
          <div class="card">
            <h4><span class="emoji-icon">💻</span>클라이언트</h4>
            <ul class="tech-list">
              <li><strong>File Upload 시 formData를 담아 서버에 Post요청 (/upload)</strong>
                <ul>
                  <li>업로드중엔 로딩화면을 유지</li>
                  <li>업로드가 완료되면 파일과 pdf.js 라이브러리를 사용하여 PDF를 화면에 표시</li>
                </ul>
                </li>
            </ul>
            <div class="highlight-box">
              <h5>🔑 주요 구현 사항</h5>
              <ul class="tech-list">
                <li><strong>FileInput의 name 속성을 통해 서버에 요청</strong></li>
                <li><strong>개별선택, 범위선택 시에 화면구성, Page 수집방법이 달라야함</strong></li>
              </ul>
            </div>
          </div>
          
          <div class="card">
            <h4><span class="emoji-icon">💻</span>서버</h4>
            <ul class="tech-list">
              <li><strong>multer 모듈을 활용하여 전달받은 request(formData)를 저장</strong></li>
              <li><strong>fs 모듈을 활용하여 새로운 PDF를 전달 받으면 기존 PDF를 삭제</strong></li>
              <li><strong>response를 end 하여 요청을 종료</strong></li>
            </ul>
          </div>
        </div>

        <h3><span class="emoji-icon">🔔</span>Viewer 기능</h3>
        
        <h4><span class="emoji-icon">💻</span>클라이언트 구현</h4>
        
        <div class="highlight-box">
          <h5>📄 Pagination 구현</h5>
          <ul class="tech-list">
            <li><strong>개별선택:</strong> prev, next button, input을 사용하여 페이지 네비게이션</li>
            <li><strong>범위선택:</strong> start, end input을 사용하여 페이지 범위 지정</li>
          </ul>
        </div>

        <div class="highlight-box">
          <h5>🔍 Scale 구현</h5>
          <ul class="tech-list">
            <li><strong>다양한 조작 방법 지원:</strong> + - button, ctrl + wheel, + - keydown 으로 조절</li>
            <li><strong>현재의 Scale 값으로 Page Export</strong></li>
          </ul>
          <div class="warning-box">
            <h6>⚠️ 기술적 도전 - 브라우저 확대/축소 충돌 문제</h6>
            <p><strong>문제:</strong> 브라우저의 기본 확대/축소 기능을 사용하면 PDF가 깨지는 현상 발생</p>
            <p><strong>해결방법:</strong></p>
            <ul class="tech-list">
              <li>eventListener에 <code>preventDefault()</code> 적용하여 기본 동작 차단</li>
              <li>wheel eventListener 인자에 <code>{ passive: false }</code>를 추가하여 이벤트 차단 가능하게 설정</li>
            </ul>
          </div>
        </div>

        <div class="highlight-box">
          <h5>✅ 사용자가 Export할 Page 선택</h5>
          <ul class="tech-list">
            <li><strong>개별선택:</strong> 직접 Page를 선택 및 제거 (선택된 Page 표시)</li>
            <li><strong>범위선택:</strong> 현재 보고있는 Pages 자동 선택</li>
          </ul>
        </div>

        <h3><span class="emoji-icon">🔔</span>Export 기능</h3>
        
        <div class="card-layout">
          <div class="card">
            <h4><span class="emoji-icon">💻</span>클라이언트 Export 프로세스</h4>
            <ul class="tech-list">
              <li><strong>1. 선택된 Pages를 pageData에 담아 JSON 형식으로 서버에 post (/convert) 요청</strong>
                <div class="info-box">
                  <p><strong>구현 방법:</strong> pageData는 <code>JSON.stringify()</code>를 사용하여 json 문자열로 변환하여 body에 포함하여 post</p>
                </div>
                </li>
              
              <li><strong>2. zip 라이브러리를 사용하여 zip 객체 생성</strong></li>
              
              <li><strong>3. 현재 Node를 Clone 하여 필요없는 내용을 제거 후 blob 변환 → zip객체에 push</strong>
                <ul>
                  <li>불필요한 elements, classes, style 등 제거</li>
                  <li>순수한 콘텐츠만 추출하여 저장</li>
              </ul>
                </li>
              
              <li><strong>4. /convert 요청 종료 후 svg file을 get (/getSVGFile) 요청</strong>
                <ul>
                  <li>요청중엔 로딩화면을 유지</li>
                </ul>
                <div class="info-box">
                  <h6>🔑 비동기 처리 구현</h6>
                  <ul class="tech-list">
                    <li><code>await</code>을 사용하여 /convert → /getSVGFile 순차적 실행 보장</li>
                    <li>response를 json으로 받아온 후 SVG File을 blob 변환 → zip객체에 push</li>
                  </ul>
                </div>
                </li>
              
              <li><strong>5. js, common css 동적 생성 후 zip객체에 push</strong></li>
              
              <li><strong>6. 모든 요청 종료 후 비동기로 zip을 generate하여 패키징된 zip file 다운로드</strong>
                <div class="warning-box">
                  <h6>⚠️ 중요한 구현 사항</h6>
                  <ul class="tech-list">
                    <li>svg 파일도 반드시 패키징 되어야 함</li>
                    <li>getSVG 요청이 종료된 후에 zip.generate되어야 하므로 getSVG요청에 await 키워드 추가 후 비동기로 generate</li>
                  </ul>
                </div>
                </li>
              </ul>
          </div>
          
          <div class="card">
            <h4><span class="emoji-icon">💻</span>서버 Export 처리</h4>
            <ul class="tech-list">
              <li><strong>1. request(pageData)로 요청받은 Page만 SVG로 변환</strong></li>
              
              <li><strong>2. 서버에 내장되어 있는 PDF to SVG 프로그램을 실행</strong>
                <ul>
                  <li>실행을 위해 <code>child_process</code> 모듈의 <code>exec()</code> 함수를 사용하여 batch 명령어를 동적으로 실행</li>
                </ul>
                  </li>
            </ul>
            
            <div class="warning-box">
              <h5>⚠️ 기술적 도전과 해결</h5>
              
              <h6>1. 한글 깨짐 문제</h6>
              <p><strong>문제:</strong> shell에서 한국어가 깨지는 현상 발생</p>
              <p><strong>해결:</strong> <code>'chcp 65001'</code> command를 통해 UTF-8로 인코딩 변경</p>
              
              <h6>2. 비동기 처리 버그</h6>
              <p><strong>문제:</strong> exec는 비동기 함수이기 때문에 command가 끝나지 않아도 convert 요청을 종료하는 버그 발생</p>
              <p><strong>해결:</strong> command를 promise 배열에 push 후 <code>await</code>과 <code>Promise.all()</code>을 사용하여 모든 커맨드가 완료된 후 요청을 종료</p>
            </div>
            
            <ul class="tech-list">
              <li><strong>3. convert 요청 종료 후 getSVGFile get 요청에 응답</strong>
                <ul>
                  <li>생성된 svg 파일을 json 형식으로 클라이언트에게 전달</li>
                  <li><strong>메모리 관리:</strong> 클라이언트에게 전달이 완료된 후엔 서버에 저장된 SVG파일 제거</li>
                </ul>
                    </li>
                </ul>
          </div>
        </div>
      </div>

      <div class="project-detail-section">
        <h2><span class="emoji-icon">🖨</span>프리뷰</h2>
        <div class="image-gallery">
          <img style="width: 100%; border-radius: 10px;" src="${require("../img/pdf_02.png")}" alt="초기 화면"/>
          <p>초기 화면 - 파일 업로드 전</p>
          
          <img style="width: 100%; border-radius: 10px;" src="${require("../img/pdf_04.png")}" alt="로딩 화면 1"/>
          <p>로딩 화면 - 파일 업로드 중</p>
          
          <img style="width: 100%; border-radius: 10px;" src="${require("../img/pdf_05.png")}" alt="로딩 화면 2"/>
          <p>로딩 화면 - SVG 변환 중</p>
          
          <img style="width: 100%; border-radius: 10px;" src="${require("../img/pdf_03.png")}" alt="개별선택 화면"/>
          <p>개별선택 화면 - 페이지별 선택 가능</p>
          
          <img style="width: 100%; border-radius: 10px;" src="${require("../img/pdf_06.gif")}" alt="개별선택 기능 시연"/>
          <p>개별선택 기능 시연 - 드래그 및 선택 기능</p>
          
          <img style="width: 100%; border-radius: 10px;" src="${require("../img/pdf_07.png")}" alt="범위선택 화면"/>
          <p>범위선택 화면 - 페이지 범위 지정</p>
        </div>
      </div>

      <div class="project-detail-section">
        <h2><span class="emoji-icon">🛠</span>기술 스택</h2>
        <div class="card-layout">
          <div class="highlight-box">
            <h4>Frontend</h4>
            <ul class="tech-list">
              <li><strong>Vue3 (Composition API)</strong> - 반응형 UI 구현</li>
              <li><strong>SCSS</strong> - 컴포넌트 기반 스타일링</li>
              <li><strong>pdf.js</strong> - PDF 렌더링 및 텍스트 추출</li>
              <li><strong>zip.js</strong> - 클라이언트 사이드 파일 압축</li>
            </ul>
          </div>
          <div class="info-box">
            <h4>Backend</h4>
            <ul class="tech-list">
              <li><strong>Node.js</strong> - 서버 런타임 환경</li>
              <li><strong>Express</strong> - RESTful API 구현</li>
              <li><strong>multer</strong> - multipart/form-data 파일 업로드</li>
              <li><strong>child_process</strong> - PDF to SVG 변환 프로그램 실행</li>
              <li><strong>fs module</strong> - 파일 시스템 조작 및 관리</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="project-detail-section">
        <h2><span class="emoji-icon">💡</span>기술적 도전과 성과</h2>
        
        <div class="card-layout">
          <div class="card">
            <h4>🎯 주요 도전 과제</h4>
            <ul class="tech-list">
              <li><strong>대용량 PDF 처리:</strong> 수백 페이지 PDF의 효율적 렌더링</li>
              <li><strong>메모리 최적화:</strong> 클라이언트/서버 메모리 관리</li>
              <li><strong>비동기 처리:</strong> 복잡한 비동기 작업 순서 보장</li>
              <li><strong>크로스 플랫폼:</strong> Windows 환경에서의 한글 인코딩</li>
            </ul>
          </div>
          
          <div class="card">
            <h4>📈 프로젝트 성과</h4>
            <ul class="tech-list">
              <li><strong>풀스택 개발 경험:</strong> Frontend와 Backend 전체 구현</li>
              <li><strong>파일 처리 전문성:</strong> 업로드, 변환, 다운로드 전체 파이프라인</li>
              <li><strong>실무 활용 가능:</strong> 실제 문서 작업에 활용 가능한 도구</li>
              <li><strong>확장 가능한 구조:</strong> 다른 파일 형식으로 확장 가능</li>
            </ul>
          </div>
        </div>

        <div class="highlight-box">
          <h4>🔧 개발하면서 배운 점</h4>
          <ul class="tech-list">
            <li><strong>비동기 프로그래밍의 중요성:</strong> Promise와 async/await를 활용한 복잡한 비동기 흐름 제어</li>
            <li><strong>메모리 관리:</strong> 대용량 파일 처리 시 메모리 누수 방지 및 가비지 컬렉션</li>
            <li><strong>사용자 경험:</strong> 로딩 상태, 에러 처리 등 세심한 UX 설계의 중요성</li>
            <li><strong>시스템 통합:</strong> 외부 프로그램과의 통합 및 인코딩 문제 해결</li>
          </ul>
        </div>
                </div>
              `,
  },
  {
    number: 2,
    title: "Mevie",
    content: `Vue.js 3.X를 사용하여 개발된 영화검색 웹 애플리케이션`,
    project: `#Vue3, #Vuex, #VueRouter, #Javascript, #Scss, #Axios`,
    gitUrl: "https://github.com/SoominYim/Mevie",
    url: "https://mevie.vercel.app/",
    image: require("@/assets/img/mevie_01.png"),
    contents: `
        <vue-component name="ProjectDetailSection" props='{"title":"프로젝트 개요","icon":"🎬"}'>
          <p>
            TMDB API를 활용한 반응형 영화 검색 플랫폼으로, <strong>Vercel에 배포</strong>되어 실제 서비스 중입니다.
            Vue 3의 최신 기능을 활용하여 영화 검색, 상세 정보 조회, 장르별 탐색 등 종합적인 영화 정보 서비스를 제공합니다.
          </p>
        </vue-component>

        <vue-component name="ProjectDetailSection" props='{"title":"핵심 기능","icon":"⭐"}'>
          <vue-component name="ProjectCardLayout">
            <vue-component name="ProjectCard" props='{"title":"메인 페이지","icon":"🏠"}'>
              <vue-component name="ProjectTechList" props='{"type":"feature-list"}'>
                <li>인기 영화 무한 슬라이더</li>
                <li>장르별 영화 카테고리</li>
                <li>반응형 디자인</li>
                <li>다크/라이트 모드 토글</li>
                <li>LocalStorage 기반 설정 저장</li>
              </vue-component>
            </vue-component>
            <vue-component name="ProjectCard" props='{"title":"검색 기능","icon":"🔍"}'>
              <vue-component name="ProjectTechList" props='{"type":"feature-list"}'>
                <li>실시간 검색 결과</li>
                <li>무한 스크롤 페이지네이션</li>
                <li>로딩 스피너 UX</li>
                <li>검색어 자동 trim 처리</li>
                <li>모바일 최적화</li>
              </vue-component>
            </vue-component>
            <vue-component name="ProjectCard" props='{"title":"상세 페이지","icon":"📱"}'>
              <vue-component name="ProjectTechList" props='{"type":"feature-list"}'>
                <li><strong>상세 정보:</strong> 줄거리, 개봉일, 평점, 런타임</li>
                <li><strong>출연진/스태프:</strong> 감독, 주요 배우 정보</li>
                <li><strong>추천 시스템:</strong> 비슷한 장르 영화 추천</li>
                <li><strong>SEO 최적화:</strong> URL 기반 페이지 라우팅</li>
              </vue-component>
            </vue-component>
          </vue-component>
        </vue-component>

        <vue-component name="ProjectDetailSection" props='{"title":"기술적 구현","icon":"🛠"}'>
          <vue-component name="ProjectCardLayout">
            <vue-component name="ProjectHighlightBox" props='{"title":"상태 관리 & 라우팅"}'>
              <vue-component name="ProjectTechList" props='{"type":"tech-list"}'>
                <li><strong>Vuex</strong>로 글로벌 상태 관리 (다크모드, 사용자 설정)</li>
                <li><strong>Vue Router</strong>로 SPA 라우팅 구현</li>
                <li><strong>LocalStorage</strong>로 사용자 설정 영구 저장</li>
              </vue-component>
            </vue-component>
            <vue-component name="ProjectInfoBox" props='{"title":"API & 성능 최적화"}'>
              <vue-component name="ProjectTechList" props='{"type":"tech-list"}'>
                <li><strong>TMDB API</strong> 연동으로 실시간 영화 데이터</li>
                <li><strong>Lazy Loading</strong>으로 필요시에만 API 요청</li>
                <li><strong>Debouncing</strong> 적용으로 검색 성능 최적화</li>
              </vue-component>
            </vue-component>
          </vue-component>
          
          <vue-component name="ProjectHighlightBox" props='{"title":"반응형 & UX"}'>
            <vue-component name="ProjectTechList" props='{"type":"tech-list"}'>
              <li><strong>Mobile Detect</strong>로 디바이스별 최적화</li>
              <li><strong>SCSS</strong>로 컴포넌트 기반 스타일링</li>
              <li><strong>CSS Grid/Flexbox</strong>로 유연한 레이아웃</li>
              <li><strong>Infinite Scroll</strong>로 끊김없는 사용자 경험</li>
            </vue-component>
          </vue-component>
        </vue-component>

        <vue-component name="ProjectDetailSection" props='{"title":"주요 화면","icon":"📱"}'>
          <vue-component name="ProjectImageGallery">
            <img src="${require("../img/mevie_03.png")}" alt="메인 페이지"/>
            <p>메인 페이지 - 인기 영화 & 장르별 카테고리</p>
            
            <img src="${require("../img/mevie_04.png")}" alt="상세 페이지"/>
            <p>상세 페이지 - 영화 정보 & 추천 시스템</p>
            
            <img src="${require("../img/mevie_05.png")}" alt="검색 페이지"/>
            <p>검색 페이지 - 실시간 검색 & 무한 스크롤</p>
            
            <img src="${require("../img/mevie_11.png")}" alt="모바일 버전"/>
            <p>모바일 최적화 화면</p>
          </vue-component>
        </vue-component>

        <vue-component name="ProjectDetailSection" props='{"title":"프로젝트 성과","icon":"🚀"}'>
          <vue-component name="ProjectCardLayout">
            <vue-component name="ProjectCard" props='{"title":"실제 배포","icon":"🌐"}'>
              <p>Vercel을 통한 안정적인 서비스 운영</p>
            </vue-component>
            <vue-component name="ProjectCard" props='{"title":"반응형 지원","icon":"📱"}'>
              <p>모든 디바이스에서 최적화된 사용자 경험</p>
            </vue-component>
            <vue-component name="ProjectCard" props='{"title":"성능 최적화","icon":"⚡"}'>
              <p>API 호출 최소화 및 로딩 성능 개선</p>
            </vue-component>
          </vue-component>
        </vue-component>
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
        <vue-component name="ProjectDetailSection" props='{"title":"프로젝트 개요","icon":"📋"}'>
          <p>
            사용자가 <strong>점심 뽑기, 사다리타기, 게임</strong> 등의 기능들을 사용할 수 있는 툴들을 모아둔 웹 애플리케이션입니다.<br/>
            <strong>Nuxt3</strong>와 <strong>Pinia</strong>를 활용하여 모던한 상태 관리와 SSR을 구현했습니다.
          </p>
          
          <vue-component name="ProjectHighlightBox" props='{"title":"🎞 페이지를 만든 이유"}'>
            <p>
              점심이나 커피를 뽑을 사람 등 <strong>일상 생활에서 필요한 뽑기</strong>를 만들면서, 뽑기뿐만이 아닌 
              작업 중에 필요한 것이나 킬링타임용 게임 등 제가 원하는 것들을 모두 만들어보고 싶어 제작하게 되었습니다.
            </p>
          </vue-component>
        </vue-component>

        <vue-component name="ProjectDetailSection" props='{"title":"🖥 스토리보드 및 기능구현","icon":"🖥"}'>
          
          <h3><span class="emoji-icon">☀️</span>날씨</h3>
          <vue-component name="ProjectImageGallery">
            <img style="width: 100%; border-radius: 10px;" src="${require("../img/minimate_01.png")}" alt="날씨 화면"/>
            <p>날씨 API를 활용한 실시간 날씨 정보</p>
          </vue-component>
          
          <vue-component name="ProjectTechList" props='{"type":"feature-list"}'>
            <li><strong>OpenWeatherMap API</strong>를 사용하여 날씨 정보를 받아옵니다.</li>
            <li><strong>날씨 애니메이션:</strong> 비, 눈 애니메이션과 시간에 따라 Background 색상이 변경됩니다.</li>
            <li><strong>다양한 정보 표시:</strong> 오늘 날씨와 날짜에 맞는 날씨, 추후 날짜의 날씨가 표시됩니다.</li>
            <li><strong>상세 정보:</strong> 날짜 클릭 시 강수 확률, 강수량, 바람의 강도, 습도를 표시합니다.</li>
          </vue-component>

          <h3><span class="emoji-icon">🍚</span>점심 뽑기</h3>
          <vue-component name="ProjectImageGallery">
            <img style="width: 100%; border-radius: 10px;" src="${require("../img/minimate_02.gif")}" alt="점심 뽑기 GIF"/>
            <p>점심 뽑기 기능 시연</p>
          </vue-component>
          
          <vue-component name="ProjectTechList" props='{"type":"feature-list"}'>
            <li><strong>랜덤 뽑기:</strong> 오늘의 점심을 뽑습니다.</li>
            <li><strong>카테고리별 선택:</strong> 한식, 중식, 일식, 양식, 아시안 중 선택하여 음식을 고를 수 있습니다.</li>
            <li><strong>재뽑기 기능:</strong> 원하지 않는다면 다시 뽑을 수 있습니다.</li>
          </vue-component>

          <h3><span class="emoji-icon">☕</span>커피 뽑기</h3>
          <vue-component name="ProjectImageGallery">
            <img style="width: 100%; border-radius: 10px;" src="${require("../img/minimate_03.gif")}" alt="커피 뽑기 GIF"/>
            <p>커피 뽑기 기능 시연</p>
          </vue-component>
          
          <vue-component name="ProjectTechList" props='{"type":"feature-list"}'>
            <li><strong>인원 관리:</strong> 커피를 살 인원을 뽑습니다.</li>
            <li><strong>동적 인원 조정:</strong> 인원을 추가하거나 제거할 수 있습니다.(중복 ❌)</li>
            <li><strong>최소 인원 체크:</strong> 2명 이상이 될 경우 뽑기를 진행할 수 있습니다.</li>
            <li><strong>재뽑기:</strong> 원하지 않는다면 다시 뽑을 수 있습니다.</li>
          </vue-component>

          <h3><span class="emoji-icon">🪜</span>사다리타기</h3>
          <vue-component name="ProjectImageGallery">
            <img style="width: 100%; border-radius: 10px;" src="${require("../img/minimate_04.gif")}" alt="사다리타기 GIF"/>
            <p>사다리타기 게임 시연</p>
          </vue-component>
          
          <vue-component name="ProjectTechList" props='{"type":"feature-list"}'>
            <li><strong>인원 설정:</strong> 3 ~ 12명의 인원을 선택할 수 있습니다.</li>
            <li><strong>커스텀 내기:</strong> 내기는 커스텀할 수 있으며, 자동내기 클릭 시 꽝 1명과 나머지는 당첨을 선택합니다.</li>
            <li><strong>인터랙티브 게임:</strong> 시작하기 클릭 후 최상단의 아이템을 클릭시 그 아이템의 색상이 사다리를 탑니다.</li>
          </vue-component>

          <h3><span class="emoji-icon">⚫</span>오목 (진행중)</h3>
          <vue-component name="ProjectImageGallery">
            <img style="width: 100%; border-radius: 10px;" src="${require("../img/minimate_05.gif")}" alt="오목 게임 GIF"/>
            <p>오목 게임 시연</p>
          </vue-component>
          
          <vue-component name="ProjectTechList" props='{"type":"feature-list"}'>
            <li><strong>기본 룰:</strong> 흑돌이 선을 잡고 플레이합니다.</li>
            <li><strong>승리 조건:</strong> 먼저 오목을 만드는 인원이 승리합니다.</li>
            <li><strong>게임 종료:</strong> 승리 후엔 돌을 둘 수 없으며, 다시하기를 클릭하여 게임을 다시 합니다.</li>
          </vue-component>

          <vue-component name="ProjectWarningBox" props='{"title":"🔧 기능 추가 예정"}'>
            <vue-component name="ProjectTechList" props='{"type":"feature-list"}'>
              <li><strong>렌주룰 적용:</strong> 흑돌은 33, 6목, 44가 불가능합니다.</li>
              <li><strong>UI 개선:</strong> 더 직관적인 인터페이스</li>
              <li><strong>무르기 기능:</strong> 이전 수로 돌아가기</li>
              <li><strong>멀티플레이:</strong> 가능하다면 socket.io를 통한 멀티 플레이 기능</li>
            </vue-component>
          </vue-component>
        </vue-component>

        <vue-component name="ProjectDetailSection" props='{"title":"🛠 기술 스택","icon":"🛠"}'>
          <vue-component name="ProjectCardLayout">
            <vue-component name="ProjectCard" props='{"title":"Frontend","icon":"💻"}'>
              <vue-component name="ProjectTechList" props='{"type":"tech-list"}'>
                <li><strong>Nuxt3</strong> - SSR 및 모던 Vue 프레임워크</li>
                <li><strong>TypeScript</strong> - 타입 안전성 확보</li>
                <li><strong>SCSS</strong> - 컴포넌트 기반 스타일링</li>
              </vue-component>
            </vue-component>

            <vue-component name="ProjectCard" props='{"title":"State Management","icon":"🔧"}'></vue-component>
              <vue-component name="ProjectTechList" props='{"type":"tech-list"}'>
                <li><strong>Pinia</strong> - 모던 상태 관리 라이브러리</li>
                <li><strong>Composition API</strong> - 반응형 상태 관리</li>
              </vue-component>
            </vue-component>
          </vue-component>
        </vue-component>

        <vue-component name="ProjectDetailSection" props='{"title":"💡 개발하면서 배운 점","icon":"💡"}'>
          <vue-component name="ProjectHighlightBox" props='{"title":"🎯 핵심 성과"}'></vue-component>
            <vue-component name="ProjectTechList" props='{"type":"tech-list"}'>
              <li><strong>Nuxt3 활용:</strong> SSR과 CSR의 장점을 모두 활용한 하이브리드 렌더링</li>
              <li><strong>Pinia 상태 관리:</strong> Vuex보다 간결하고 TypeScript 친화적인 상태 관리</li>
              <li><strong>사용자 중심 설계:</strong> 일상에서 실제로 사용할 수 있는 도구 개발</li>
              <li><strong>게임 로직 구현:</strong> 오목, 사다리타기 등 복잡한 게임 알고리즘 구현 경험</li>
            </vue-component>
          </vue-component>
        </vue-component>
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
