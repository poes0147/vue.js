<!-- views/UserList.vue -->
<template>
  <div class="container">
    <table class="table">
      <caption>
        Total :{{ count }}
      </caption>
      <thead>
        <tr>
          <th>NO</th>
          <th>아이디</th>
          <th>이름</th>
          <th>성별</th>
          <th>가입날짜</th>
          <!-- yyyy-MM-dd -->
        </tr>
      </thead>
      <tbody>
        <!-- 데이터 출력-->
        <template v-if="count > 0">
          <tr v-for="userinfo in userList" :key="userinfo.user_no"
          @click="goToUserInfo(userinfo.user_no)">
            <td>{{ userinfo.user_no }}</td>
            <td>{{ userinfo.user_id }}</td>
            <td>{{ userinfo.user_name }}</td>
            <td>{{ userinfo.user_gender }}</td>
            <td>{{ dateFormat(userinfo.join_date) }}</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="4">현제 데이터가 없습니다.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      userList: []
    }
  },
  computed: {
    count() {
      return this.userList.length;
    },
  },
  created() {
    //객체 생성완료 시점 -> 초기화 데이터 호출
    this.getUserList();
  },
  methods: {
    async getUserList() {
      let ajaxRes = await axios.get('/api/users')
        .catch(err => console.log(err))
      this.userList = ajaxRes.data;
    },
    goToUserInfo(userNo){
    this.$router.push({name : 'UserInfo', query : { no : userNo}})

  },
  dateFormat(value, format = 'yyyy년 MM월 dd일') {
  if (!value) return '';
  const date = new Date(value);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return format
    .replace('yyyy', year)
    .replace('MM', month)
    .replace('dd', day);
  }
  





}

};
</script>
