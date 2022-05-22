<template>
  <div class="test-wrapper">
    <list-layout>
      <template slot="zxx">
        <permissionbtn />
      </template>
      <template slot="header">
        <conditions />
      </template>
      <template slot="content">
        <al-table :column="formData.column" :data="formData.list" :pagination="true" />
      </template>
    </list-layout>
  </div>
</template>

<script>
import { getTestList } from '@/api/test.js'
import ListLayout from '@/components/listLayout/index.vue'
import AlTable from '@/components/AlTable/index.vue'
import Conditions from './components/conditions/index.vue'
import Permissionbtn from './components/permissionbtn/index.vue'

export default {
  components: {
    ListLayout,
    AlTable,
    Conditions,
    Permissionbtn
  },
  data() {
    return {
      formData: {
        column: [
          { prop: 'nick', label: '昵称' },
          { prop: 'phone', label: '手机' },
          { prop: 'name', label: '真实姓名' },
          { prop: 'subject', label: '所属学科' },
          { prop: 'job', label: '职位' },
          { prop: 'year', label: '工作年限' },
          { prop: 'updateTime', label: '录入时间' },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (<a href='#' style='color: blue'><span>查找</span>|<span>编辑</span>|<span>删除</span></a>)
            }
          }
        ],
        list: []
      }
    }
  },
  created() {
    getTestList().then(res => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items, total } = data
        this.formData.list = items
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
