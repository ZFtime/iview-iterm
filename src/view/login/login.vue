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
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions(['handleLogin', 'getUserInfo']),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        console.log('handleLogin' + JSON.stringify(res))
        this.getUserInfo().then(res => {
          console.log('getUserInfo' + JSON.stringify(res))
          this.$router.push({
            name: '商标管理'
          })
        })
      })
      // sessionStorage.setItem('uesrName',res.result.userName);
    }
  }
}
</script>

<style>
</style>
