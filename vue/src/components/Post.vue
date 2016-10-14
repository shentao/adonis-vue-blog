<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>
      {{ post.content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  },
  methods: {}
}
</script>
