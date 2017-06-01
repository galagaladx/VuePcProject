<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" placeholder="请输入用户名" v-model="userName">
        </div>
        <span class="g-form-error">{{userNameError.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" placeholder="请输入密码" v-model="passWord">
        </div>
        <span class="g-form-error">{{passWordError.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{errorText}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      passWord: '',
      errorText: ''
    }
  },
  computed: {
    userNameError() {
      let errorText, status;
      if (!/@/g.test(this.userName)) {
        status = false;
        errorText = '请输入@符号';
      } else {
        status = true;
        errorText = '';
      }
      if (!this.userFalg) {
        errorText = '';
        this.userFalg = true;
      }
      return {
        status,
        errorText
      }
    },
    passWordError() {
      let errorText, status;
      if (!/^\w{1,6}$/g.test(this.passWord)) {
        status = false;
        errorText = '请输入1到6位密码';
      } else {
        status = true;
        errorText = '';
      }
      if (!this.passWordFalg) {
        errorText = '';
        this.passWordFalg = true;
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin() {
      if (!this.userNameError.status || !this.passWordError.status) {
        this.errorText = "部分选项未通过";
      } else {
        this.errorText = '';
        this.$http.get('api/login').then((res) => {
          this.$emit('has-login', res.data)
        }).catch((err) => {
          console.log(err)
        });
      }
    }
  }
}
</script>

<style scope>

</style>