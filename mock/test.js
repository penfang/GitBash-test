const list = [{
        nick: 'pf1',
        phone: 123456789,
        name: 'pf1',
        subject: '语文',
        job: '教师',
        year: 30,
        updateTime: '2022-5-17'
    },
    {
        nick: 'pf2',
        phone: 987654321,
        name: 'pf2',
        subject: '数学',
        job: '教师',
        year: 30,
        updateTime: '2022-5-17'
    },
    {
        nick: 'pf3',
        phone: 123459876,
        name: 'pf3',
        subject: '英语',
        job: '教师',
        year: 30,
        updateTime: '2022-5-17'
    }
]

module.exports = [{
    url: '/vue-admin-template/test/list',
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