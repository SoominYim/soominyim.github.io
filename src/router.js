import { createWebHistory, createRouter } from "vue-router";
// createWebHashHistory 해시모드도 있는데 url에 #이 추가됨
// createRouter 가 라우터를 만드는것을 도와줌
import BlogList from "@/view/BlogList.vue";
import BlogHome from "@/view/BlogHome.vue";
import BlogMain from "@/view/BlogMain";
import BlogProfile from "@/view/BlogProfile.vue";
import BlogProject from "@/components/projectlist/BlogProject";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: BlogHome,
      name: BlogHome,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
        leavaClass: "animate__animated animate__fadeIn",
      },
    },
    {
      path: "/main",
      component: BlogMain,
      name: BlogMain,
      meta: {
        enterClass: "animate__animated animate__bounceInUp",
        leavaClass: "animate__animated animate__bounceInUp",
      },
    },
    {
      path: "/list", // 누군가가 이 path를 요청하면
      component: BlogList, // component를 가져옴
      name: BlogList,
      meta: {
        enterClass: "animate__animated animate__bounceInDown",
        leavaClass: "animate__animated animate__bounceInUp",
      },
    },
    {
      path: "/list/:id",
      component: BlogProject,
      name: BlogProject,
    },
    {
      path: "/profile",
      component: BlogProfile,
      name: BlogProfile,
      meta: {
        enterClass: "animate__animated animate__bounceInDown",
        leavaClass: "animate__animated animate__bounceInUp",
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
