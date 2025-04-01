<template>
  <div>
    <PageTitle title="first! "/>
    <!-- <PageTitle title="Todey is... "/> -->
     <hr>
     <PageContent v-bind:title="header"
                  v-bind:count="10"
                  :writer="['writer']"
                  :regdate="20241015"
                  :content = "{
                                first : 'node.js',
                                second : 'vue.js'
                  }"/>
                  <hr>
      <PageContent v-bind="info" @update-info="handler"></PageContent>
      <hr>
      <RefComponent ref="child"></RefComponent>
      <hr>
      <laber>부모데이터: <input type="number" v-model="num"></laber>
      <button @click="childHandler">자식 제어</button>
  </div>
</template>

<script>
import PageTitle from './PageTitle.vue';
import PageContent from './PageContent.vue';
import RefComponent from './RefComponent.vue';

export default {
  data(){
    return{
      header : "게시글 조회",
      info : {  
        title : 'Today is',
        count : 5,
        writer : 'Chan',
        regdate : '2025-03-05',
        // content : 'No Content'
      },
      num : 0
    }
  },
  components : { //자식 컴포넌트 등록
    PageTitle,PageContent,RefComponent
  },
  created(){
    console.log('PropsComponent.vus Created')
  },
  mounted(){
    console.log('PropsComponent.vue Mounted')
  },
  methods : {
    handler(readInfo){
      //자식 컵포넌트의 emil을 기반으로
      //넘긴 데이터가 매게ㅐ변수로 넘어옴
      alert('좌식좌식')
      this.info.count = readInfo;
    },
    childHandler(){
      //1) 자식 컴포넌트의 함수 직접 호출
      this.$refs.child.plusCount();
      //2)자식 컴포넌트의 태그에 직접 접근
      let RefCom = this.$refs.child;
      RefCom.$refs.btn.click();
    }
  },
  watch : {
    num(){
      this.$refs.child.content = this.num;
    }
  }
  // computed : {
  //   num(){
  //     return this.$refs.child.content;
  //   }
  // }
}
</script>

<style>

</style>