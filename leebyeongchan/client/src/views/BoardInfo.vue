<template>
  <div class="container text-cinter">
    <div class="row">
      <div class="row">
        <div class="col-4">글번호</div>
        <div class="col-8">{{ board.no }}</div>
      </div>
      <div class="row">
        <div class="col-4">작성일</div>
        <div class="col-8">{{ board.created_date }}</div>
      </div>
      <div class="row">
        <div class="col-4">이름</div>
        <div class="col-8">{{ board.writer }}</div>
      </div>
      <div class="row">
        <div class="col-4">제목</div>
        <div class="col-8">{{ board.title }}</div>
      </div>
      <div class="row">
        <div class="col-4">내용</div>
        <div class="col-8">{{ board.content }}</div>
      </div>
      <div class="row">
        <div class="col-4">댓글</div>
        <div class="col-8">없음</div>
      </div>
    </div>
    <div class="row">
      <button class="col btn btn-info" @click="goToUpdate()">수정</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      board: [],
    };
  },
  created() {
    const selectNo = this.$route.query.no;
    this.getBoardInfo(selectNo);
  },
  methods : {
    async getBoardInfo(no) {
            let ajaxRes = await axios.get(`/api/boards/${no}`)
                .catch(err => console.log(err))
            this.board = ajaxRes.data;
        },
        goToUpdate(){
          this.$router.push({ name: 'BoardUpdate', query: { id: this.board.no } })
        }
  }
};
</script>
