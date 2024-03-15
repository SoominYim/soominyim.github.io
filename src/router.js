// Vue Router에서 createWebHashHistory와 createRouter를 가져옴
import { createWebHashHistory, createRouter } from "vue-router";

// 라우팅을 위한 컴포넌트들을 import 합니다.
import BlogList from "@/view/BlogList.vue";
import BlogHome from "@/view/BlogHome.vue";
import BlogMain from "@/view/BlogMain";
import BlogAbout from "@/view/BlogAbout.vue";
import BlogProject from "@/view/BlogProject";

// createRouter를 사용하여 라우터 객체를 생성합니다.
const router = createRouter({
  // createWebHashHistory 함수를 사용하여 해시모드로 라우팅
  history: createWebHashHistory(),
  routes: [
    // "/" 경로로 접근 시 BlogHome 컴포넌트를 렌더링
    {
      path: "/",
      component: BlogHome,
      name: BlogHome,
      // 트랜지션 효과를 위한 메타 데이터 설정
      meta: {
        enterActiveClass: "animate__animated animate__fadeIn",
        leaveToClass: "animate__animated animate__fadeOut",
      },
    },
    // "/main" 경로로 접근 시 BlogMain 컴포넌트를 렌더링
    {
      path: "/main",
      component: BlogMain,
      name: BlogMain,
      // 트랜지션 효과를 위한 메타 데이터 설정
      meta: {
        enterActiveClass: "animate__animated animate__fadeIn",
        leaveActiveClass: "animate__animated animate__fadeOut",
      },
    },
    // "/list" 경로로 접근 시 BlogList 컴포넌트를 렌더링
    {
      path: "/list",
      component: BlogList,
      name: BlogList,
      // 트랜지션 효과를 위한 메타 데이터 설정
      meta: {
        enterActiveClass: "animate__animated animate__slideInDown",
        leaveActiveClass: "animate__animated animate__fadeOut",
      },
    },
    // "/list/:id" 경로로 접근 시 BlogProject 컴포넌트를 렌더링
    // :id는 동적 라우트 파라미터를 의미함
    {
      path: "/list/:id",
      component: BlogProject,
      name: BlogProject,
      // 트랜지션 효과를 위한 메타 데이터 설정
      meta: {
        enterActiveClass: "animate__animated animate__slideInDown",
        leaveActiveClass: "animate__animated animate__slideOutUp",
      },
    },
    // "/about" 경로로 접근 시 BlogAbout 컴포넌트를 렌더링
    {
      path: "/about",
      component: BlogAbout,
      name: BlogAbout,
      // 트랜지션 효과를 위한 메타 데이터 설정
      meta: {
        enterActiveClass: "animate__animated animate__slideInDown",
        leaveActiveClass: "animate__animated animate__fadeOut",
      },
    },
    // 라우팅에 맞지 않는 경우 404 페이지를 구현하기 위한 설정
    {
      path: "/:anything(.*)",
      component: BlogHome,
    },
  ],
});

// 라우터 객체를 export하여 Vue 애플리케이션에서 사용할 수 있도록 함
export default router;
