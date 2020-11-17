<template>
  <div>
    登录界面
    <el-input v-model="userForm.account" placeholder="账号"></el-input>
    <el-input v-model="userForm.password" placeholder="密码" type="password"></el-input>
    <el-button type="primary" @click="login" :loading="loginWait">登录</el-button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      userForm: {
        account: '',
        password: ''
      },
      loginWait: false
    }
  },
  methods: {
    login () {
      this.loginWait = true
      setTimeout(() => {
        this.loginWait = false
        this.$router.push({ name: 'DashBoard' })
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
