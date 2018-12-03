<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
import Http from '../../common/networkRequest.js'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions(['handleLogin', 'getUserInfo']),
    handleSubmit ({ userName, password }) {
      Http.jsRequest({
        url: 'http://localhost:9099/success',
        method: 'get',
        data: {
          userName: userName,
          password: password
        }
      })
        .then(res => {
          if (res.code && res.code === 1) {
            sessionStorage.setItem('user', res.result.userName)
            sessionStorage.setItem('userId', res.result.userId)
            this.handleLogin({ userName, password }).then(res => {
              this.getUserInfo().then(res => {
                this.$router.push({
                  name: '许可证管理'
                })
              })
            })
            // sessionStorage.setItem('uesrName',res.result.userName);
          }
        })
        .catch(res => {})
    }
  }
}
</script>

<style>
</style>
