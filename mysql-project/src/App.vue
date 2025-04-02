<template>
  <!--Header Component-->
  <DefaultHeader/>
  
  <!-- <slot>{{ DefaultHeader }}</slot> -->
  <router-view/>
    <!--Footer Component-->
</template>

<script>

import DefaultHeader from '@/layouts/DefaultHeader.vue';

export default{
  components : {
    DefaultHeader,
  }
}

</script>
<style>



</style>
