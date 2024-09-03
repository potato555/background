// 整个项目api的统一管理

import request from "./request"

//请求首页左侧的表格的数据

export default{
  getTableData(){
    return request({
      url: "/home/getTableData",
      method: 'get',
      //get请求传的时候通过params，post是data
      // mock:true,
    })
  },
  getCountData(){
    return request({
      url: "/home/getCountData",
      method: 'get',
      
    })
  },
  getChartData(){
    return request({
      url: "/home/getChartData",
      method: 'get',
      
    })
  }
}