<!-- views/ListBinding.vue-->

<template>
  <div>
    <button v-on:click="addData">+</button>
    <input type="number" v-model.lazy="no">
    <table>
      <thead>
        <tr>
          <th>제품번호</th>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(prod,index) in products"
        v-bind.key="prod.product_no">
          <td>{{ prod.product_no }}</td>
          <td>{{ prod.product_name }}</td>
          <td>{{ prod.price }}</td>
          <td>{{ prod.category }}</td>
          <td>{{ prod.deliver_price }}</td>
          <td><button v-on:click="delData" >삭제</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
let data = [
  {
    product_no : 1000,
    product_name : "기계식키보드",
    price : 25000,
    category : "노트북/테블릿",
    deliver_price: 5000,
  },
  {
    product_no : 2000,
    product_name : "무선마우스",
    price : 12000,
    category : "노트북/테블릿",
    deliver_price: 5000,
  },
  {
    product_no : 3000,
    product_name : "아이패드",
    price : 725000,
    category : "노트북/테블릿",
    deliver_price: 5000,
  },
]

export default{
 data(){
  return{
    products : data,
    no : ''
  }
 },
 methods : {
  addData(event){
    let obj = {
    product_no : ((this.products.length+1)*1000),
    product_name : "아이패드",
    price : 725000,
    category : "노트북/테블릿",
    deliver_price: 5000,
    }
    this.products.push(obj);
    // this.products[this.products.length] = obj;
  },
  delData(index){
    let delNo ={

    }
    this.products.splice(index, 1)
  }
 },
 watch : {
  no(){
    this.products.splice(this.no,1)
  }
 }
}
</script>

<style>
table{
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width : 100%
  }
  td, th{
    border : 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    text-align: center;
  }
</style>