<template>
  <div class="posts-wrapper">
    <div class="post" v-for="post of posts">
      <h2>{{ post.title }}</h2>
      <p> {{ post.content }} </p>
    </div>
    <h2 v-if="posts.length === 0"> No posts found </h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.fetchPosts()
  },
  methods: {
    fetchPosts () {
      axios.get('http://localhost:3333/posts')
        .then(response => { this.posts = response.data })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
