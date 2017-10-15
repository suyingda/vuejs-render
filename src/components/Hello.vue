 
<template>
  <div>
    <h1 v-if="level ===1">
      <a :href="'#'+title">
        <slot></slot>
      </a>
    </h1>

    <h2 v-if="level ===2">
      <a :href="'#'+title">
        {{title}}
      </a>
    </h2>
    <h3 v-if="level ===3">
      <a :href="'#'+title">
        {{title}}
      </a>
    </h3>
    <h4 v-if="level ===4">
      <a :href="'#'+title">
        {{title}}
      </a>
    </h4>
    <h5 v-if="level ===5">
      <a :href="'#'+title">
        {{title}}
      </a>
    </h5>
    <h6 v-if="level ===6">
      <a :href="'#'+title">
        {{title}}
      </a>
    </h6>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    level: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: 1
    }
  }
}
</script>

<style>

</style>

