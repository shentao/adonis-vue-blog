<template>
<div>
  <form @submit.prevent="createPost">
    <fieldset class="form-group">
      <label>Title:</label>
      <input type="text" name="name" value="" v-model="title" class="form-control" required>
      <label>Content:</label>
      <textarea class="form-control" v-model="content" required></textarea>
      <button class="btn btn-primary btn-block" type="submit">Publish</button>
    </fieldset>
  </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  computed: {
    formData () {
      return {
        title: this.title,
        content: this.content
      }
    }
  },
  methods: {
    createPost () {
      axios.post('http://localhost:3333/posts/create', this.formData)
        .then(response => {
          this.$router.push('home')
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
