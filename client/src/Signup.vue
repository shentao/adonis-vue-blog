<template>
<div>
  <form @submit.prevent="signup">
    <h2>Signup</h2>
    <fieldset class="form-group">
      <label>Username:</label>
      <input type="text" name="username" v-model="username" class="form-control" required>
      <label>e-mail:</label>
      <input type="text" name="e-mail" v-model="email" class="form-control" required>
      <label>Password:</label>
      <input type="password" name="password" v-model="password" class="form-control" required>
      <button class="btn btn-primary btn-block" type="submit">Signup</button>
    </fieldset>
  </form>
</div>
</template>

<script>
import axios from 'axios'
import { authUser } from './auth'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  computed: {
    formData () {
      return {
        username: this.username,
        email: this.email,
        password: this.password
      }
    }
  },
  methods: {
    signup () {
      axios.post('http://localhost:3333/signup', this.formData)
        .then(response => {
          authUser(response.data)
        })
        .catch(error => {
          console.warn('Signup error: ', error)
        })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
