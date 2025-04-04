<!-- views/UserInfo.vue -->
<template>
  <div class="container">
    <table class="table">
      <tr>
        <th class="text-right">NO</th>
        <td class="text-center">{{ userData.user_no }}</td>
      </tr>
      <tr>
        <th class="text-right">아이디</th>
        <td class="text-center">{{ userData.user_id }}</td>
      </tr>
      <tr>
        <th class="text-right">비밀번호</th>
        <td class="text-center">{{ userData.user_pw }}</td>
      </tr>
      <tr>
        <th class="text-right">이름</th>
        <td class="text-center">{{ userData.user_name }}</td>
      </tr>
      <tr>
        <th class="text-right">성별</th>
        <td class="text-center">{{ userData.user_gender }}</td>
      </tr>
      <tr>
        <th class="text-right">나이</th>
        <td class="text-center">{{ userData.user_ager }}</td>
      </tr>
      <tr>
        <th class="text-right">가입일자</th>
        <td class="text-center">{{ userData.join_date }}</td>
      </tr>
    </table>
    <div>
      <button class="btn btn-light">목록</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      userData : []
    }
  },
  created(){
    const selectNo = this.$route.query.no;
    this.getUserInfo(selectNo)
  },
  methods: {
    async getUserInfo(userNo){
      let ajaxRes = await axios.get(`/api/users/${userNo}`)
                         .catch(err => console.log(err))
      this.userData = ajaxRes.data;
    }
  }
}
</script>