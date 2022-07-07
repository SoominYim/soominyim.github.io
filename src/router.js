import { createWebHistory, createRouter } from "vue-router";
// createWebHashHistory 해시모드도 있는데 url에 #이 추가됨
// createRouter 가 라우터를 만드는것을 도와줌
import BlogList from "@/components/BlogList.vue";
import BlogHome from "@/components/BlogHome.vue";
import BlogDetail from "@/components/BlogDetail";
import BlogAuthor from "@/components/BlogAuthor";
import BlogComment from "@/components/BlogComment";

const routes = [
  {
    path: "/",
    component: BlogHome,
  },
  {
    path: "/list", // 누군가가 이 path를 요청하면
    component: BlogList, // component를 가져옴
  },
  {
    // /:id는 나중에 component에서 $route.params.id 로 사용될거임
    path: "/detail/:id",
    component: BlogDetail,
    children: [
      {
        path: "author",
        component: BlogAuthor,
      },
      {
        path: "comment",
        component: BlogComment,
      },
    ],
  },
  {
    // 404 만들때 씀
    path: "/:anything(.*)",
    component: BlogHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
