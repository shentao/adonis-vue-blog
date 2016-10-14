<template>
  <div>
    {{ posts }}
  </div>
</template>

<script>
import { getPosts } from 'src/api'

export default {
  data () {
    return {
      posts: []
    }
  },
  watch: {
    $route () {
      getPosts(this.$route.params.id).then(response => {
        this.posts = response.data
      })
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    getPosts(this.$route.params.id).then(response => {
      this.posts = response.data
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
