import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/notice',
        name: 'notice',
        component: () => import('@/views/NoticeView.vue'),
        redirect: '/notice/list',
        children: [
            {
                path: 'list',
                name: 'noticeList',
                component: () => import('@/components/notice/NoticeList.vue'),
            },
            {
                path: 'view/:no',
                name: 'noticeDetail',
                component: () => import('@/components/notice/NoticeDetail.vue'),
            },
            {
                path: 'write',
                name: 'noticeWrtie',
                component: () => import('@/components/notice/NoticeWrtie.vue'),
            },
            {
                path: 'delete',
                name: 'noticeDelete',
                component: () => import('@/components/notice/NoticeDelete.vue'),
            },
            {
                path: 'modify',
                name: 'noticeModify',
                component: () => import('@/components/notice/NoticeModify.vue'),
            },
        ],
    },
    {
        path: '/user',
        name: 'user',
        component: UserView,
        children: [
            {
                // 로그인
                path: 'login',
                name: 'login',
                component: () => import(/* webpackChunkName: "user" */ '@/components/user/UserLogin.vue'),
            },
            {
                // 회원가입
                path: 'register',
                name: 'register',
                component: () => import(/* webpackChunkName: "user" */ '@/components/user/UserRegister.vue'),
            },
            {
                // 개인화면
                path: 'mypage',
                name: 'mypage',
                component: () => import(/* webpackChunkName: "user" */ '@/components/user/UserPage.vue'),
            },
        ],
    },
    {
        path: '/bucket',
        name: 'bucket',
        component: () => import('@/views/BucketView.vue'),
        redirect: '/bucket/list',
        children: [
            {
                path: 'list',
                name: 'bucketList',
                component: () => import('@/components/bucket/BucketList.vue'),
            },
            {
                path: 'view/:no',
                name: 'bucketDetail',
                component: () => import('@/components/bucket/BucketSpotListDetail.vue'),
            },
            {
                path: 'create',
                name: 'bucketCreate',
                component: () => import('@/components/bucket/BucketSpotListCreate.vue'),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
