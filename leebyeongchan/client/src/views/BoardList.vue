<template>
   <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="count>0">
          <tr v-for="boardinfo in boardList" :key="boardinfo.no"
          @click="goToInfo(boardinfo.no)">
            <td>{{ boardinfo.no }}</td>
            <td>{{ boardinfo.title }}</td>
            <td>{{ boardinfo.writer }}</td>
            <td>{{ dateFormat(boardinfo.created_date) }}</td>
            <td>2</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      boardList : []
    }
  },
  computed:{
    count(){
      return this.boardList.length;
    }
    
  },
  created(){
    this.getBoardList();
  },
  methods:{
    async getBoardList(){
      let ajaxRes = await axios.get('/api/boards')
      .catch(err => console.log(err))
      this.boardList = ajaxRes.data;
    },
    goToInfo(boardNo){
      this.$router.push({name : 'BoardInfo', query : { no : boardNo}})
    },
    dateFormat(value, format = 'yyyy년 MM월 dd일') {
  if (!value) return '';
  const date = new Date(value);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return format
    .replace('yyyy', year)
    .replace('MM', month)
    .replace('dd', day);
  }
  }
}
</script>