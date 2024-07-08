import type { RouteLocationRaw } from 'vue-router'

export default defineAppConfig({
  auth: {
    /** 인증되지 않은 상태의 사용자가 접근할 수 있는 URL */
    ignorePaths: ['/auth/sign-in'] as RouteLocationRaw[],

    login: {
      /**
       * 로그인 페이지 URL
       *
       * NOTE: 이 값을 변경한다고 로그인 페이지가 변경되지 않음
       *       Nuxt 는 파일 기반 라우팅을 사용하므로 경로 변경 시 `pages/auth/sign-in.vue` 파일의 위치를 변경해야 함
       */
      path: '/auth/sign-in' as RouteLocationRaw,
    },
  },
})
