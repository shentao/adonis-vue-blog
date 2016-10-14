<template>
  <div>
    <label for="search">Search:</label>
    <input type="text" @input="changeSearch($event)">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  methods: {
    changeSearch (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
