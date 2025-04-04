//user_service.js
const mariaDB = require("../database/mapper.js");

// 전체조회
const findAll = async () => {
  let list = await mariaDB.query("userList").catch((err) => console.log(err));
  return list;
};
//단건조회
const findById = async (userNo) => {
  let info = (await mariaDB.query("userInfo", userNo))[0].catch((err) =>
    console.log(err)
  );

  return info;
};

//등록
const addUser = async (userInfo) => {
  let columnlist = [
    "user_id",
    "user_pw",
    "user_name",
    "user_gender",
    "user_ager",
  ];
  let addInfo = converterAray(userInfo, columnlist);
  let result = await mariaDB
    .query("userAdd", addInfo)
    .catch((err) => console.log(err));
  return result;
};
//배열을 객체로
const converterAray = (target, list) => {
  let aray = [];
  for (let field of list) {
    let val = target[field];
    aray.push(val);
  }
  return aray;
};

//수정
const modifyUser = async (userInfo, userNo) => {
  let updateInfo = [userInfo, userNo]
  let result = await mariaDB.query('userUpdate', updateInfo)
  return result
};


//등록 다른 방법
/*
const addUser = async (userInfo) => {
  let insertInfo = getInsertInfo(userInfo);
  let result = await mariaDB
    .query("", insertInfo)
    .catch((err) => console.log(err));
  if (result.insertId > 0) {
    return { result: true, user_no: result.insertId };
  } else {
    return { result: false };
  }
};

function getInsertInfo(target) {
  return [
    target.user_id,
    target.user_pw,
    target.user_name,
    target.user_gender,
    target.user_age,
  ];
} */

module.exports = {
  findAll,
  findById,
  addUser,
  modifyUser,
};
