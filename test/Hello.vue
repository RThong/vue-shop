<template>
  <div>
    <h2 class="hello">Hello {{name}} {{ $attrs }}</h2>
    <slot name="test"></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Vue!'
    }
  },
  mounted() {
  	console.dir(this)
  }
}
</script>