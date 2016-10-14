<template>
  <div>
    <h1>Posts</h1>
    <search v-model="search">
    </search>
    <ul v-if="posts">
      <post v-for="post in filteredPosts" :post="post">
      </post>
    </ul>
    <p v-else>
      No posts found
    </p>
  </div>
</template>

<script>
import { getPosts } from 'src/api'
import Post from 'components/Post'
import Search from 'components/Search'

export default {
  components: {
    Post,
    Search
  },
  data () {
    return {
      posts: [],
      search: ''
    }
  },
  computed: {
    filteredPosts () {
      return this.posts.filter(post => {
        return post.title.includes(this.search)
      })
    }
  },
  created () {
    getPosts().then(response => {
      this.posts = response.data
    })
  }
}
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
  text-align: left;
}
</style>
