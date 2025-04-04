<template>
    <div class="container">
        <div class="row">
            <div class="row">
                <label>No</label>
                <input type="text" v-model="info.no">
            </div>
            <div class="row">
                <label>제목</label>
                <input type="text" v-model="info.title">
            </div>
            <div class="row">
                <label>작성자</label>
                <input type="text" v-model="info.writer">
            </div>
            <div class="row">
                <label>내용</label>
                <input type="text" v-model="info.content">
            </div>
            <div class="row">
                <label>작성일자</label>
                <label>{{ }}</label>
            </div>
        </div>
        <div class="row">
            <button class="btn btn-info" @click="addBoard()" :DESIABLED="!nameOk">저장</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            info: {
              no: null,
              title: null,
              writer: null,
              content: null,
            }
        }
    },
    computed: {
        nameOk() {
            return this.info.name != null && this.info.name != ''
        }

    },
    methods: {
        async addBoard() {
          let boardUpInfo = {
            no : this.info.no,
            title : this.info.title,
            writer : this.info.writer,
            content : this.info.content,
          }
            let ajaxRes = await axios.post('/api/boards', boardUpInfo)
                .catch(err => console.log(err))
            let sqlRes = ajaxRes.data;
            let boardNo = sqlRes.insertId;
            if (boardNo > 0) {
                alert('등록되었습니다.')
                this.$router.push({ name: 'BoardInfo', query: { no: boardNo } })
            } else {
                alert('다시 등록해 주세요')
            }
        },
    }
}

</script>