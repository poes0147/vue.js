<template>
  <Layout><!--모달에선 여는테그, 닫는테그를 함께-->
    <template v-slot:header>
      <h1>팝업 제목</h1>

    </template>
    <template v-slot:default>
      <p>팝업 내용</p>
      <p>팝업 컨텐츠</p>
    </template>
    <template v-slot:footer>
      <button type="button">닫기</button>

    </template>
  </Layout>

</template>

<script>
import Layout from './ModelLayout.vue';

export default{
  components: {
    Layout
  }
}
</script>