<template>
    <div class="permission-btn">
        <div class="permission-header">
            <div class="permission-header-btn">
                <button v-has="'admin'">admin</button>
                <button v-has="'editor'">editor</button>
            </div>
            <div class="lb-table" v-if="isShow">
                <input type="text" value="input" placeholder="input">
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </div>
        <div class="permission-body">
            <table class="tab">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>姓名</th>
                        <th>姓别</th>
                        <th>年龄</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list" :key="item.id">
                        <th>{{item.id}}</th>
                        <td>{{item.name}}</td>
                        <td>{{item.sex}}</td>
                        <td>{{item.age}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {getTableList} from '@/api/lbtable.js'
import has from '@/directivs/has.js'
export default{
    name: "",
    data(){
        return {
            isShow: true,
            list: []
        }
    },
    created(){
        getTableList().then(res => {
            const {code, data} = res
            if(Number(code) === 20000){
                const {items, total} = data
                this.list = items
            }
        })
    },
    directives: {
        has,
    }

}
</script>

<style lang="scss" scoped>
.permission-btn{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;

    width: 100%;
    .permission-header{
        width: 100%;
        margin-bottom: 10px;
        .permission-header-btn{}
        .lb-table{}
    }

    .permission-body{
        width: 100%;
        .tab{
            width: 100%;
            border-collapse: collapse;

            td{
                border: 1px;
            }
        }
        
    }
    
}
</style>