<script lang="ts" setup>
const auth = useAuthStore()
</script>

<template>
  <div>
    <p>안녕하세요, {{ auth.userInfo.username }}님</p>
  </div>
</template>
