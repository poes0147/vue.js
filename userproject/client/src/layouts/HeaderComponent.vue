<!-- layouts/HeaderComponent.vue -->
<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <!-- <a href="#" class="nav-link active" >Link</a> -->
      <router-link to="/userList" class="nav-link active">전체조회</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/userAdd" class="nav-link">등록</router-link>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
  </ul>
</template>