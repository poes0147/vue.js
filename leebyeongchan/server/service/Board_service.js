const mariaDB = require('../database/mapper.js')

//전체조회
const  findAll = async ()=>{
  let list = await mariaDB.query('selectAll');
  return list;
};

//단건조회
const  findByNo = async (boardNo)=>{
  let info = (await mariaDB.query('selectByNo',boardNo))[0];
  return info;
};
//등록
const  addBoard = async (boardInfo)=>{
  let columnlist = ['no','title' ,'writer' ,'content','created_date']
  let addInfo = converterAray(boardInfo, columnlist);
  let result = await mariaDB.query('insertInfo', addInfo);
  return result;
};
const converterAray = (target, list) =>{
  let aray = [];
  for(let field of list){
    let val = target[field];//target['name']
    aray.push(val);
  }
  return aray;
}

//수정
const   modifyBoardInfo = async (boardUpInfo, boardNo)=>{
  let updateInfo = [boardUpInfo, boardNo]
  let result = await mariaDB.query('updateInfo',updateInfo)
  return result;
};

module.exports ={
  findAll,
  findByNo,
  addBoard,
  modifyBoardInfo,
}