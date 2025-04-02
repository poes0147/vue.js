<template>
  <div class="container">
    <table class="table">
      <caption> Total : {{ count }}</caption>
      <thead>
        <tr>
          <th>No</th>
          <th>아이디</th>
          <th>이름</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="count > 0"> <!--if와 for는 동시에 사용이 불가능. 
          그래서 둘다 사용하고자 하면 템플릿을 사용하여 if를 돌린 뒤
          for문을 사용하는게 좋다. vue-->
          <tr v-for="(info, idx) in customerList" :key="info.id"
                                                  @click="goToCustomerInfo(info.id)"> <!--임시변수 info 작성. 순환값 안에서만 사용됨-->
            <td>{{ idx+1 }}</td>
            <td>{{ info.id }}</td>
            <td>{{ info.name }}</td>
            <td>{{ info.phone }}</td>
            <!-- <td>{{ info.address }}</td> -->
          </tr>
        </template>
        <tr v-else>
          <td colspan="4">
            현재 데이터가 존재하지 않습니다.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      customerList : [],
    }
  },
  computed : {
    count(){
      return this.customerList.length;
    }
  },
  created(){
    //컴포넌트가 초기화할 데이터 호출
    this.getCustomerList();
  },
  methods: {
    async getCustomerList(){//http://localhost:3000/customers
      let ajaxRes = await axios.get('/api/customers')
                               .catch(err => console.log(err));
      this.customerList = ajaxRes.data; 
    },// 비동기는 데이터가 올때까지 보장하지 않음. 그렇기에 확실한 약속을 받기 위해 saync와 await를 사용한다
    goToCustomerInfo(custId){
      this.$router.push({name : 'CustInfo', query : {id:custId}});

      //query : {key : value} => ?key=value
      //params
      //1)route의 path 속성 : '/target/:uId'
      //2)params : {uId:value}=> /target/value
    }
  }
}
</script>

