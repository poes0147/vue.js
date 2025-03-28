<template>
  <!-- Component가 가지는 HTML <BODY역활> -->
    <p>{{ year }}년 {{ month }}월 {{ day }}일</p>
    <p>다음해 {{ afterYear }}</p>

</template>

<script>
// Component를 관리하는 Vue객체 정의 : DATA포함
export default{
  data(){ // 데이터(CRUD) => 프로퍼티
    let today = new Date();
    return{
      year : today.getFullYear(),
      month : today.getMonth() + 1,
      day : today.getDate(),
    }
  },
  computed : {//기존 데이터를 기반으로 연산한 결과값(Read Only)
              //==> 프로퍼티
    afterYear(){//메서드 표현 afterYear : function(); 이걸 줄여서..
      return this.year + 1; //this.@@ ==>객체선택? 
    }
  },
  methods : {//값을 보내는 역활 vue가 사용하는 모든 종류의 함수

  },
  watch : { //데이터 변경에 따른 추가 작업 정의
    month(){
      if(this.month<10){
        this.month = '0' + this.month;
      }
    }
  }
}
</script>

<style scoped>
/* Component가 가지는 Style */

</style>