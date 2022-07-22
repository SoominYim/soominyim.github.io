import { createWebHistory, createRouter } from "vue-router";
// createWebHashHistory 해시모드도 있는데 url에 #이 추가됨
// createRouter 가 라우터를 만드는것을 도와줌
import BlogList from "@/view/BlogList.vue";
import BlogHome from "@/view/BlogHome.vue";
import BlogMain from "@/view/BlogMain";
import BlogAbout from "@/view/BlogAbout.vue";
import BlogProject from "@/components/projectlist/BlogProject";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: BlogHome,
      name: BlogHome,
      meta: {
        enterActiveClass: "animate__animated animate__fadeIn",
        leaveToClass: "animate__animated animate__fadeOut",
      },
    },
    {
      path: "/main",
      component: BlogMain,
      name: BlogMain,
      meta: {
        enterActiveClass: "animate__animated animate__fadeIn",
        leaveActiveClass: "animate__animated animate__fadeOut",
      },
    },
    {
      path: "/list", // 누군가가 이 path를 요청하면
      component: BlogList, // component를 가져옴
      name: BlogList,
      meta: {
        enterActiveClass: "animate__animated animate__slideInDown",
        leaveActiveClass: "animate__animated animate__fadeOut",
      },
    },
    {
      path: "/list/:id",
      component: BlogProject,
      name: BlogProject,
      meta: {
        enterActiveClass: "animate__animated animate__slideInDown",
        leaveActiveClass: "animate__animated animate__slideOutUp",
      },
    },
    {
      path: "/about",
      component: BlogAbout,
      name: BlogAbout,
      meta: {
        enterActiveClass: "animate__animated animate__slideInDown",
        leaveActiveClass: "animate__animated animate__fadeOut",
      },
    },
    {
      // 404 만들때 씀
      path: "/:anything(.*)",
      component: BlogHome,
    },
  ],
});

export default router;
