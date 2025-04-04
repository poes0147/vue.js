//Table : t_uesrs

//전체조회
const userList =
  `SELECT user_no
		    ,user_id
		    ,user_pw
        ,user_name
        ,user_gender
        ,user_ager
        ,join_date
FROM t_users
ORDER BY user_no`;
//당건조회
const userInfo =
  `SELECT user_no
		    ,user_id
    		,user_pw
        ,user_name
        ,user_gender
        ,user_ager
        ,join_date
FROM t_users
WHERE user_no = ? `;

//등록
const userAdd =
  `INSERT INTO t_users(
		    user_id
		    ,user_pw
        ,user_name
        ,user_gender
        ,user_ager)
VALUES (?,?,?,?,?)`;

//수정
const userUpdate =
`UPDATE t_users
SET ?
WHERE user_no = ?`

module.exports = {
  userList,
  userInfo,
  userAdd,
  userUpdate
}