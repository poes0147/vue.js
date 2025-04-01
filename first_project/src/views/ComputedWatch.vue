<template>
  <div>
    <input type="number" v-model="price">원
    <br>
    <input type="number" v-model="count">개
    <p>과세 금액 : {{ amount.toLocaleString() }}원</p>
    <p>부가세 10%: {{ tax.toLocaleString() }}원</p>
    <p>결재 금액 : {{ total.toLocaleString() }}원</p>
    <p :class="{'warn' : isShow}">결제 금액이 5만원을 초과했습니다.</p>
  </div>
</template>
<script>
import { isShallow } from 'vue';

export default{
  data(){
    return{
      price : 0,
      count : 0,
      isShow : true,
    }
  },
  computed : {
    amount(){
      return this.price * this.count;
    },
    tax(){
      return this.amount * 0.1;
    },
    total(){
      return this.amount + this.tax;
    }

  },
  watch : {
    total(){
      if(this.total>50000){
        this.isShow = false;
      }
    }
  }
}
</script>

<style>
.warn {
  display : none;
  
}
</style>