const list = [{
        id: '1',
        name: 'pf',
        sex: '男',
        age: 20
    },
    {
        id: '2',
        name: 'pf',
        sex: '女',
        age: 25
    },
    {
        id: '3',
        name: 'pf',
        sex: '未知',
        age: 30
    }
]

module.exports = [{
    url: '/vue-admin-template/test/lbtable',
    type: 'get',
    response: config => {
        return {
            code: 20000,
            data: {
                total: list.length,
                items: list
            }
        }
    }
}]