import { createWebHistory, createRouter } from "vue-router";
// createWebHashHistory 해시모드도 있는데 url에 #이 추가됨
// createRouter 가 라우터를 만드는것을 도와줌
import BlogList from "@/components/projectlist/BlogList.vue";
import BlogHome from "@/components/BlogHome.vue";
import BlogProfile from "@/components/BlogProfile.vue";
import BlogProject from "@/components/projectlist/BlogProject";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: BlogHome,
    },
    {
      path: "/list", // 누군가가 이 path를 요청하면
      component: BlogList, // component를 가져옴
    },
    {
      path: "/list/:id",
      component: BlogProject,
    },
    {
      path: "/profile",
      component: BlogProfile,
    },
    {
      // 404 만들때 씀
      path: "/:anything(.*)",
      component: BlogHome,
    },
  ],
});

export default router;
