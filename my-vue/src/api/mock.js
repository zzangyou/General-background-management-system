import Mock from 'mockjs'
import homeApi from './mockData/home'
import userApi from './mockData/user'
import permissionApi from './mockData/permission'
// 拦截请求 设计拦截请求的地址 及相关的数据
Mock.mock('/home/getData',homeApi.getHomeData)


// 本地获取user数据
Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/add/,'post',userApi.createUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)
Mock.mock(/user\/delete/,'get',userApi.deleteUser)
Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)