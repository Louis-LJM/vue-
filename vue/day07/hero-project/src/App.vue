<template>
  <div id="app" class="container">
      <nav-bar></nav-bar>
    <div class="col-md-2">
        <my-aside></my-aside>
    </div>

    <div class="col-md-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import NavBar from './components/nav-bar'
import MyAside from './components/my-aside'
export default {
  components: {
    NavBar,
    MyAside
  }
}
</script>

<style>

</style>
