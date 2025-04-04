//라우터모듈
const express = require('express');
const router = express.Router();
//라우팅 = 사용자의 요청(URL+METHOD) + Service + view
const userService = require('../service/user_service.js');
const { userInfo } = require('../database/sql/users.js');

//전체조회
router.get('/users', async (req,res)=>{
  let list = await userService.findAll()
  res.send(list)
});

//단건조회
router.get('/users/:no', async (req,res)=>{
  let userNo = req.params.no;
  let userInfo = await userService.findById(userNo)
  res.send(userInfo)
})

//등록
router.post('/users', async (req,res)=>{
  let userAdd = req.body;
  let result = await userService.addUser(userAdd)
  console.log("요청 바디 확인:", req.body);
  res.send(result)
})

//수정
router.put('/users/:no', async (req,res)=>{
  let userNo = req.params.no;
  let userInfo = req.body;
  let result = await userService.modifyUser(userInfo,userNo);
  console.log("요청 바디 확인:", userNo);
  console.log("요청 바디 확인:", req.body);
  res.send(result);
})

module.exports = router;