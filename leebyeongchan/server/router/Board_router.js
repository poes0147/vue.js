const express = require('express');
const router = express.Router();
const boardService = require('../service/Board_service.js');

//전체조회: GET +
router.get('/boards', async (req,res)=>{
    let boardList = await boardService.findAll()
    res.send(boardList);

})
//단건조회: GET +
router.get('/boards/:no', async (req,res)=>{
    let boardNo = req.params.no;
    let boardInfo = await boardService.findByNo(boardNo);
    console.log(boardNo)
    res.send(boardInfo);
})
//등록: POST +
router.post('/boards', async (req,res)=>{
    let addBoard = req.body;
    let result = await boardService.addBoard(addBoard)
    res.send(result)
})
//수정: PUT +
router.put('/boards/:no', async (req,res)=>{
    let boardNo = req.params.no;
    let boardUpInfo = req.body;
    let result = await boardService.modifyBoardInfo(boardUpInfo,boardNo);
    res.send(result);
})  


module.exports = router;