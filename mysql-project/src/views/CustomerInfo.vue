<template>
  <div class="container text-cinter">
    <!--content 영역-->
    <div class="row">
      <div class="row">
        <div class="col-4">아이디</div>
        <div class="col-8">{{customer.id}}</div>
      </div>
      <div class="row">
        <div class="col-4">이름</div>
        <div class="col-8">{{customer.name}}</div>
      </div>
      <div class="row">
        <div class="col-4">email</div>
        <div class="col-8">{{customer.email}}</div>
      </div>
      <div class="row">
        <div class="col-4">연락처</div>
        <div class="col-8">{{customer.phone}}</div>
      </div>
      <div class="row">
        <div class="col-4">주소</div>
        <div class="col-8">{{customer.address}}</div>
      </div>
    </div>
        <!--button 영역-->
    <div class="row">
      <button class="col btn btn-info" @click="goToUpdateForm()">수정</button>
      <button class="col btn btn-light" @click="goToCustomerList()">목록</button>
      <button class="col btn btn-danger" @click="delInfo()">삭제</button>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
export  default{
  data(){
    return {
      customer : {},
    }
  },created(){
    const selectId = this.$route.query.id;
    this.getCustomerInfo(selectId);
},
methods : {
  async getCustomerInfo(id){  //http://localhost:3000/customers
    let ajaxRes = await axios.get(`/api/customers/${id}`)
                            .catch(err=> console.log(err))
    this.customer = ajaxRes.data;
  },
    async delInfo(){
      let ajaxRes = await axios.delete(`/api/customers/${this.customer.id}`)
                               .catch(err=> console.log(err))
    let sqlRes = ajaxRes.data;  
    let result = sqlRes.affectedRows;  // AUTO_INCREMENT 사용시
    if(result > 0){
      alert('삭제되었습니다.');
      this.$router.push('/customerList')
    }else{
      alert('삭제되지 않았습니다.')
    }
  },

  goToUpdateForm(){
    this.$router.push({name:'CustUpdate', params : { custId : this.customer.id }})
  },
  goToCustomerList(){
    this.$router.push('/customerList')
  },

}

}



</script>