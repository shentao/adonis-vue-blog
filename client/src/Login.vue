<template>
<div>
  <form @submit.prevent="login">
    <h2>Login</h2>
    <fieldset class="form-group">
      <label>e-mail:</label>
      <input type="text" name="e-mail" v-model="email" class="form-control" required>
      <label>Password:</label>
      <input type="password" name="password" v-model="password" class="form-control" required>
      <button class="btn btn-primary btn-block" type="submit">Login</button>
    </fieldset>
  </form>
</div>
</template>

<script>
import axios from 'axios'
import { loginUser } from './auth'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    formData () {
      return {
        email: this.email,
        password: this.password
      }
    }
  },
  methods: {
    login () {
      loginUser(this.formData)
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
