<template>
<div>
  <router-link :to="{ name: 'posts', params: { id: 2 } }">Go to posts</router-link>
  <router-link to="/home">Go to Home</router-link>
  <router-link to="/users">View users</router-link>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style>
</style>
