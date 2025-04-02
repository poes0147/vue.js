<template> <!--['first_name' ,'last_name' ,'email' ,'gender' ,'ip_address']-->
    <div class="container">
        <table class="table">
            <caption>Total : {{ count }}</caption>
            <thead>
                <tr>
                    <th>No</th>
                    <th>id</th>
                    <th>이름</th>
                    <th>성별</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="count > 0">
                    <tr v-for="(info, idx) in employeesList" :ket="info.id"
                        @click="goToInfo(info.id)">
                        <td>{{ idx + 1 }}</td>
                        <td>{{ info.id }}</td>
                        <td>{{ info.first_name }} {{ info.last_name }}</td>
                        <td>{{ info.gender }}</td>
                    </tr>
                </template>
                <tr v-else>
                    <td colspan="4">현제 데이터가 존재하지 않습니다.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            employeesList: []
        }
    },
    computed: {
        count() {
            return this.employeesList.length;
        }
    },
    created() {
        this.getEmployeeList();
    },
    methods: {
        async getEmployeeList() {
            let ajaxRes = await axios.get('/api/employees')
                .catch(err => console.log(err))
            this.employeesList = ajaxRes.data;
        },
        goToInfo(empId){
            this.$router.push({name : 'empInfo', query : { id : empId}})
        }
    }
}
</script>

<style lang="scss" scoped></style>