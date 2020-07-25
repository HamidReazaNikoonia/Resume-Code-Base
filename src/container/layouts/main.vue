<script>
import Header from '@layouts/header/index.vue'

export default {
  components: { Header },
}
</script>

<template>
  <div>
    <Header />
    <slot />
  </div>
</template>
