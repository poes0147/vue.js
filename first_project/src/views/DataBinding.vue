<!--views/DataBinding-->

<template>
  <!--HTML-->
  <div>
    <!--이중 괄호-->
    <h1>{{ title }}</h1>
    <!-- directive  : vue의 명령 수행, 'v-' 접두어 사용-->
     <h2 v-text="title" id="home"></h2>
     <p v-html="tagList"></p> <!--innerHTML 추가하면 하나의 테그로 사용-->
     <P v-text="tagList" v-bind:name="tagName"></P> <!--텍스트 속성만-->
     <!--v:bind 디렉티브 : 단방향 바인딩-->
     <!--v-model 디렉티브 : 양방향 바인딩-->
     <input type="text" v-model="valueModel">
     <p> {{  valueModel + 1000 }}, {{ typeof valueModel }}</p> 
     <!--양방향이란 변수 입력에 따라 실시간으로 업데이트 되는 것-->
     <input type="number" v-model.lazy="numberModel">
     <p> {{  numberModel  }}, {{ numberModel + 10000 }}</p> 
     <select v-model="selectModel">
      <option value="summer"> 여름</option>
      <option value="winter"> 겨울</option>

     </select>

     <p>{{ selectModel }}</p>
     <textarea v-model="textModel"> </textarea>
     <input type="checkbox" v-model="chData"
     true-value="여" false-value="부">
     <p>{{ chData }}</p>

<div>
     <input type="checkbox" value="서울" v-model="city">서울
     <input type="checkbox" value="대구" v-model="city">대구
     <p>{{ city }}</p>
    </div>

    <div>
<input type="radio" value="Reading" v-model="hobby"> 독서
<input type="radio" value="Moving" v-model="hobby"> 영화
<input type="radio" value="Sports" v-model="hobby"> 운동
<p> {{ hobby }}</p>
    </div>
<img v-bind:style="styleData" v-bind:src="imgUrl">
<div class="container"v-bind:class="myClass"> Class Binding Second</div>
<div class="container"v-bind:class="{'active' : isActive, 'text-red' : hasError}"> Class Binding First

</div>
       </div>
</template>


<script>
// import { has } from 'core-js/core/dict';

//Vue 객체 데이터, 기능 
export default{
  data(){ //데이터 바인딩에 사용하는 데이터들(CRUD)
    return {
      title : 'Hello, Vue.js',
      tagList : '<strong>Today is ...</strong>',
      tagName : 'bindTest', 
      valueModel : 'Korea',
      numberModel : '0',
      selectModel : 'winter',
      textModel : '백건불여일타',
      chData : '',
      city : [],
      hobby : '',
      styleData : {
  backgroundColor : 'skyblue',
  width : '200px',
},
backSetting : 'background-color : skyblue; whidth : 200px',
imgUrl : 'https://kr.vuejs.org/images/logo.png',
isActive : false,
hasError : !this.isActive,
myClass : 'active',

    }

  },
  computed : {
    hasError : function(){
      return !this.isActive;
    }
  }
}



</script>

<style>
/* */
.text-red{
  color : red
}

.container{
  width : 100%;
  height: 200px;
}

.active{
  background-color:  aquamarine;
  font-weight: bold;
}

</style>