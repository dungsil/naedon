const AUTH_STORE_ID = 'auth'

export const useAuthStore = defineStore(AUTH_STORE_ID, () => {
  // states
  const token = ref<string>()

  // getters
  const isLoggedIn = computed(() => token.value !== undefined)

  // actions

  // TODO: 로그인 액션 추가
  // TODO: 엑세스 토큰 갱신 액션 추가

  return {
    token,
    isLoggedIn,
  }
})
