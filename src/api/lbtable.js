import request from '@/utils/request'

export function getTableList(params) {
  return request({
    url: '/vue-admin-template/test/lbtable',
    method: 'get',
    params
  })
}
