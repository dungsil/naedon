<script lang="ts" setup>
const fields = [
  { name: 'username', label: '사용자 계졍', type: 'text', autocomplete: 'username', placeholder: 'your@email.com' },
  { name: 'password', label: '비밀번호', type: 'password', autocomplete: 'current-password' },
]

const router = useRouter()
const auth = useAuthStore()

async function onLogin(e: Event) {
  const data = new FormData(e.target as HTMLFormElement)

  const { ok, message } = await auth.login({
    username: data.get('username') as string,
    password: data.get('password') as string,
  })

  if (ok) {
    await router.replace('/')
  } else {
    alert(message)
  }
}

definePageMeta({ layout: 'auth' })
</script>

<template>
  <div>
    <div class="text-center">
      <h1 class="mb-2 text-3xl font-bold text-zinc-100">
        로그인
      </h1>
      <p class="sm:text-lg">
        계속 진행하기 위해 로그인이 필요합니다
      </p>
    </div>

    <form
      action="/api/authorize"
      class="mt-10 flex w-full max-w-screen-md flex-col gap-y-4"
      method="POST"
      @submit.prevent="onLogin"
    >
      <div
        v-for="field in fields"
        :key="field.name"
        class="space-y-2"
      >
        <n-label :for="field.name">
          {{ field.label }}
        </n-label>
        <n-input
          :id="field.name"
          :autocomplete="field.autocomplete"
          :name="field.name"
          :placeholder="field.placeholder"
          :type="field.type"
        />
      </div>

      <div class="mt-2">
        <n-button blocked size="lg">
          로그인
        </n-button>
      </div>
    </form>
  </div>
</template>
