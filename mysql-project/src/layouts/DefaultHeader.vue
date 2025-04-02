<!--DefaultHeader.vue-->
<template>
    <nav class="container navbar bg-body-tertiary  ">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name : 'CustList'}">전체조회</router-link> |
    <!-- <router-link :to="{ name : 'CustInfo'}">단건조회</router-link> | -->
    <router-link :to="{ name : 'CustAdd'}">등록</router-link> |
    <!-- <router-link :to="{ name : 'CustUpdate'}">수정</router-link> | -->
  </nav>
</template>