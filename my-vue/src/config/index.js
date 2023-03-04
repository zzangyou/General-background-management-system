/* 
*环境配置文件
*开发环境
*测试环境
*线上环境
*/
// 当前环境  默认线上
const env =import.meta.env.MODE || 'prod'
const EnvConfig ={
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/a25f6a35eb332c2c3d2dbdec6ee84a8d/api'
    },
    test:{
        baseApi:'/test.future.com/api',
        mockApi:'https://www.fastmock.site/mock/a25f6a35eb332c2c3d2dbdec6ee84a8d/api/home/getTableData'
    },  
     prod:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/a25f6a35eb332c2c3d2dbdec6ee84a8d/api/home/getTableData'
    }, 
}
export default {
    env,
    // mock的总开关
    mock:true,
    ...EnvConfig[env]
}