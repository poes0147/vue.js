<template>
    <div class="container">
        <div class="row">
            <div class="row">
                <div class="col-4">아이디</div>
                <div class="col-8">{{info.id}}</div>
            </div>
            <div class="row">
                <label>first_name</label>
                <input type="text" v-model="info.first_name">
            </div>
            <div class="row">
                <label>last_name</label>
                <input type="text" v-model="info.last_name">
            </div>
            <div class="row">
                <label>email</label>
                <input type="text" v-model="info.email">
            </div>
            <div class="row">
                <label>성별</label>
                <input type="text" v-model="info.gender">
            </div>
            <div class="row">
                <label>ip주소</label>
                <input type="text" v-model="info.ip_address">
            </div>
        </div>
        <div class="row">
            <button class="btn btn-info" @click="updateEmployee()">수정</button>
            <button class="btn btn-light" @click="goToList()">취소</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            info: {
                first_name: null,
                last_name: null,
                email: null,
                gender: null,
                ip_address: null,
            }
        }
    },
    created(){
        const selectId = this.$route.query.id;
        this.getEmployeeInfo(selectId)
    },
    methods: {
        async getEmployeeInfo(id) {
            let ajaxRes = await axios.get(`/api/employees/${id}`)
                .catch(err => console.log(err))
            this.info = ajaxRes.data;
        },
        
        async updateEmployee() {
            let updateEmpl ={
                first_name: this.info.first_name,
                last_name: this.info.last_name,
                email: this.info.email,
                gender: this.info.gender,
                ip_address: this.info.ip_address,
            }
            let ajaxRes = await axios.put(`/api/employees/${this.info.id}`, updateEmpl)
                .catch(err => console.log(err))
            let sqlRes = ajaxRes.data;
            let result = sqlRes.affectedRows;
            if (result > 0) {
                alert('수정되었습니다.')
                this.$router.push('/employeesList')
            } else {
                alert('다시 수정해 주세요')
            }
        },
        goToList() {
            this.$router.push('/employeesList')
        }
    }
}

</script>

<style lang="scss" scoped></style>