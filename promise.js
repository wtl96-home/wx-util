/* 
    @url : 请求地址
    @data : 传输的数据，没有则为{}
    @method : 请求方式 "GET" , "POST"

    返回promise对象，可使用.then,.catch获得数据
 */

var Usepromise = function  (url,data={},method="GET"){
  return new Promise((reslove, reject)=>{
    wx.request({
      url: url,
      method:method,
      data:data,
      success(res){
        reslove(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
}
export default {
  Usepromise
}