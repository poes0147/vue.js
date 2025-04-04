const selectAll =
`SELECT no
        ,title
        ,writer
        ,content
        ,created_date
        ,updated_date
FROM t_board_board
ORDER by no`;


const selectByNo = 
`SELECT no
        ,title
        ,writer
        ,content
        ,created_date
        ,updated_date
FROM t_board_board
WHERE no = ?`;

const insertInfo =
`INSERT INTO t_board_board(
        no
        ,title
        ,writer
        ,content
        ,created_date)
VALUES (?,?,?,?,NOW())`;

const updateInfo = 
`UPDATE t_board_board
SET ?
WHERE no = ?`


module.exports ={
    selectAll, 
    selectByNo,
    insertInfo,
    updateInfo,
    }
    