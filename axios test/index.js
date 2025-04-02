//index.js
const axios = require('axios');

// axios({

// })

// fetch('http://localhost:3000/customers')
// .then(res=> res.json())
// .then(result =>{
//   console.log('fetch, GET');
//   console.log(`\t ${result}`);
// })
// .catch(err => console.log(err));

//전체조회
axios('http://localhost:3000/customers')
// .then(res=> res.json())
.then(result => {
  console.log('axios 전체조회');
  console.log(`\t`, result.data);
})
.catch(err => console.log(err));

//단건조회
axios.get('http://localhost:3000/customers/1')
.then(result => {
  console.log('axios,단건조회')
  console.log(`\t`, result.data)
})
.catch(err => console.log(err));


//등록
// axios.post('http://localhost:3000/customers/1')
let insertInfo ={
  "name": "LeeSin",
  "email": "LeeSin@naver.com",
  "phone": "010-1212-1212",
  "address": null
}

// 1) fetch
fetch('http://localhost:3000/customers',{
  method : 'POST',
  headers : {
    'Content-Type': 'application/json',
  },
  body : JSON.stringify(insertInfo)
}) 
.then(res => res.json())
.then(result => {
  console.log('fetch, POST');
  console.log(result);
})
.catch(err => {console.error(err)});

// 1) axios
axios.post('http://localhost:3000/customers',insertInfo)
.then(result =>{
  console.log('axios, POST');
  console.log(`\t`, result.data);
})
.catch(err => {console.error(err)});


//수정

//삭제