export default defineNuxtRouteMiddleware((to) => {
  const { ignorePaths, login } = useAppConfig().auth

  // 이동하려는 경로가 무시할 경로에 포함되어 있다면 권한 체크 무시
  if (ignorePaths.includes(to.path)) {
    return
  }

  // 권한 체크 시작
  const auth = useAuthStore()

  // 로그인 중이면 무시
  if (auth.isLoggedIn) {
    return
  }

  // TODO: 리프래시 토큰을 통해 자동 로그인 처리 구현

  // 로그인 페이지로 이동
  return navigateTo(login.path)
})
