<template>
<div>
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills pull-xs-right">
        <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
        <li class="nav-item"><router-link to="/new" class="nav-link">New post</router-link></li>
        <li class="nav-item"><router-link to="/login" class="nav-link" v-if="!$store.currentUser">Login</router-link></li>
        <li class="nav-item"><router-link to="/signup" class="nav-link" v-if="!$store.currentUser">Signup</router-link></li>
        <li class="nav-item"><a href="#" @mousedown="logout()" class="nav-link" v-if="$store.currentUser">Logout</a></li>
      </ul>
      <h3 class="text-muted"> Adonis Blog </h3>
    </nav>
  </div>
  <section>
    <router-view/>
  </section>
</div>
</template>

<script>
import { logout } from './auth'

export default {
  methods: {
    logout () {
      logout()
      this.$router.push('/logout')
    }
  }
}
</script>

<style>
body {
  background: #ffffff;
}

.header {
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: .05rem solid #e5e5e5;
}

@media (min-width: 48em) {
  .container {
    max-width: 46rem;
  }
}

.header h3 {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 3rem;
}

.post {
  margin-top: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e8e8e8;
}
</style>
