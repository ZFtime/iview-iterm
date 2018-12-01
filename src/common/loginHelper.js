export default class loginHelper {
  /**
     * 判断用户是否登录状态
     */
  static islogin () {
    let isloginStatus = sessionStorage.getItem('islogin')
    if (isloginStatus) {
      return true
    }
    return false
  }
}
