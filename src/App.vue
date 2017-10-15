<template>
  <div id="app">

    <hello-world :level="1" title="特种兵1">特种兵1</hello-world>
    <hello-world :level="2" title="特种兵2">特种兵2</hello-world>
    <hello-world :level="3" title="特种兵3">特种兵3</hello-world>
    <hello-world :level="4" title="特种兵4">特种兵4</hello-world>
    <hello-world :level="5" title="特种兵5">特种兵5</hello-world>
    <hello-world :level="6" title="特种兵6">特种兵6</hello-world>
    <div>--------------------------------------------------</div>
    <RendFor :level="6" title="88888"></RendFor>
  </div>
</template>

<script>
//  import HelloWorld from './components/Hello'
import HelloWorld from './render.js'
import RendFor from './components/RendFor'
export default {
  name: 'app',
  components: {
    HelloWorld,
    RendFor
  }
}
</script>

<style>

</style>
