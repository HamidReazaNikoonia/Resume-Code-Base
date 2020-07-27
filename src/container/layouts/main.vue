<script>
import Header from '@layouts/header/index.vue'
import sideBar from '@layouts/sideBar/index.vue'

export default {
  components: { Header, sideBar },
  data() {
    return {
      sideBarActivity: false,
    }
  },
}
</script>

<template>
  <div>
    <Header @toggleActive="sideBarActivity = !sideBarActivity" />
    <sideBar :actived="sideBarActivity" />
    <slot />
  </div>
</template>
