<template>
    <div class="container">
        <div class="row">
            <div class="row">
                <label>first_name</label>
                <input type="text" v-model="info.first_name">
                <div class="form-text text-danger" :class="{ 'warning': nameOk }">
                    이름이 입력되지 않았습니다.
                </div>
                <div class="form-text text-success" :class="{ 'warning': !nameOk }">
                    사용가능한 이름 입니다.
                </div>
            </div>
            <div class="row">
                <label>last_name</label>
                <input type="text" v-model="info.last_name">
                <div class="form-text text-danger" :class="{ 'warning': nameOk }">
                    이름이 입력되지 않았습니다.
                </div>
                <div class="form-text text-success" :class="{ 'warning': !nameOk }">
                    사용가능한 이름 입니다.
                </div>
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
            <button class="btn btn-info" @click="addEmployee()" :DESIABLED="!nameOk">등록</button>
            <button class="btn btn-danger" @click="goToList()">취소</button>
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
    computed: {
        nameOk() {
            return this.info.name != null && this.info.name != ''
        }

    },
    methods: {
        async addEmployee() {
            let ajaxRes = await axios.post('/api/employees', this.info)
                .catch(err => console.log(err))
            let sqlRes = ajaxRes.data;
            let empId = sqlRes.insertId;
            if (empId > 0) {
                alert('등록되었습니다.')
                this.$router.push({ name: 'empInfo', query: { id: empId } })
            } else {
                alert('다시 등록해 주세요')
            }
        },
        goToList() {
            this.$router.push('/employeesList')
        }
    }
}

</script>

<style>
.warning {
    display: none;
}
</style>