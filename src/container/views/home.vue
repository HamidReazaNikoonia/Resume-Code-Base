<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'
import FieldWrapper from '@components/Forms/FieldWrapper/index.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, FieldWrapper },
}
</script>

<template>
  <Layout>
    <FieldWrapper>
      salam
    </FieldWrapper>
    <h1>Home Page</h1>
    <img src="@assets/images/logo.png" alt="Logo" />
  </Layout>
</template>
