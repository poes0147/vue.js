<!--CustomerUpdate.vue-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-4">아이디</div>
      <div class="col-8">{{info.id}}</div>
      <!-- <input type="text" v-model="info.id" readonly> -->
    </div>
    <div class="row">
      <label>이름</label>
      <input type="text" v-model="info.name">
    </div>
    <div class="row">
      <label>이메일</label>
      <input type="email" v-model="info.email">
    </div>
    <div class="row">
      <label>연락처</label>
      <input type="text" v-model="info.phone">
    </div>
    <div class="row">
      <label>주소</label>
      <input type="text" v-model="info.address">
    </div>
    <div class="row">
      <button class="btn btn-info" @click="updateCustomer" >수정</button>
      <button class="btn btn-danger">취소</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data() {
    return {
      info : {
        name : null,
        email : null,
        phone : null,
        address : null,
      }
    }
  },
  //수정 : 1) 사용자가 선택한 대상의 원래 데이터를 조회 => 조회
  //      2) 사용자가 버튼을 클릭했을 때 서버에 전송 => 등록
  created(){
    const selectId = this.$route.params.custId;
    this.getCustomerInfo(selectId);
},
methods : {
  async getCustomerInfo(id){  //http://localhost:3000/customers
    let ajaxRes = await axios.get(`/api/customers/${id}`)
                            .catch(err=> console.log(err))
    this.info = ajaxRes.data;
  },
  async updateCustomer(){
    let updateDta ={
      name : this.info.name,
      email : this.info.email,
      phone : this.info.phone,
      address : this.info.address,
    }
    let ajaxRes = await axios.put(`/api/customers/${this.info.id}`, updateDta)
                             .catch(err => console.log(err));
    let sqlRes = ajaxRes.data;  
    let result = sqlRes.affectedRows;  // AUTO_INCREMENT 사용시
    if(result > 0){
      alert('수정되었습니다.');
    }else{
      alert('수정되지 않았습니다.')
    }
  }
}
}
</script>


<!-- methods :{
  
}, -->