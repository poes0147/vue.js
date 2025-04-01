<template>
  <div>
    <input v-model="msg" v-on:keyup.alt.enter="clear();">
    <p> {{ msg }} </p>
    <hr>
    <form v-on:click.self="message('form')">
      Form
      <div v-on:click.once="message('div')">
        Div
        <p @click.stop="message('p')">
          p
          <hr>
          <a @click.prevent="message('a')" href="http://naver.com">네이버</a>
        </p>
      </div>
    </form>
    <hr>
    <button @click="increaseCounter">Add 1</button>
    <hr>
    <button @click="setCount(num, $event)">add{{num}}</button>
    <hr>
    <p>The Counter is {{ counter }}</p>
  </div>
</template>

<script>
export default{
  data(){//데이터(CRUD) => 프로피터
    return{
      msg : '',
      num : 7,
      counter : 0,
    }
  },
  methods: {
    clear(){
      this.msg = '';
    },
    message(tag){
      alert(`${tag},당신의 선택은`)
    },
    increaseCounter(event){
      console.log('increase',event);
      this.counter++;
    },
    setCount(value, event){
      console.log('setCount',event)
      this.counter += value;
    }
  }
}
</script>

<style>
form, form * {
  margin : 10px;
  border : 1px solid khaki;
}
</style>