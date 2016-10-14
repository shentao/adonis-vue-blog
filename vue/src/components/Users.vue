<template>
  <div>
    <h1>Posts</h1>
    <label for="search">Search:</label>
    <input type="text" name="search" v-model="search">
    <ul v-if="users">
      <li v-for="user in users">
        <router-link :to="{ name: 'showUser', params: { id: user.id }}">{{ user.username }}</router-link>
        <p>
          {{ user.email }}
        </p>
      </li>
    </ul>
    <p v-else>
      No users found
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import { getUsers } from 'src/api'

export default {
  data () {
    return {
      users: [],
      search: ''
    }
  },
  mounted () {
    getUsers().then(response => {
      this.users = response.data
    })
  },
  methods: {}
}
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
  text-align: left;
}
</style>
