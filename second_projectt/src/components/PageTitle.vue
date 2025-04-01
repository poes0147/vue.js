<template>
  <h2> {{ title }} </h2>
</template>
<script>
export default{
  /*
  data(){
    return{
      title : 'Hello, World',
    }
  }
    */
   //부모가 넘겨줄 값들, Read Only
   props : ['title'],
   
  created(){
    console.log('PageTitle.vus Created')
  },
  mounted(){
    console.log('PageTitle.vue Mounted')
  }
}
</script>