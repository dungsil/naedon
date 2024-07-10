interface LoginInput {
  username: string
  password: string
}

interface LoginOutput {
  ok: boolean
  message?: string
}

const AUTH_STORE_ID = 'auth'

export const useAuthStore = defineStore(AUTH_STORE_ID, () => {
  // states
  const token = ref<string>()
  const userInfo = ref<{ username?: string }>({})

  // getters
  const isLoggedIn = computed(() => token.value !== undefined)

  // actions
  async function login(input: LoginInput): Promise<LoginOutput> {
    // FIXME: 로그인 API 호출 및 토큰 저장 구현
    await new Promise((resolve) => setTimeout(resolve, 100))
    if (input.username === 'user' && input.password === 'password') {
      token.value = 'fake-token'
      userInfo.value.username = '사용자'
      return { ok: true }
    }

    return { ok: false, message: '아이디 혹은 비밀번호가 일치하지 않습니다' }
  }

  // TODO: 엑세스 토큰 갱신 액션 추가

  return {
    token,
    userInfo,

    isLoggedIn,

    login,
  }
})
