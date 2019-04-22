<template>
  <div class="hello">
    <div @click="out">点我测试</div>
    <router-link to="/about">About</router-link>
    <input v-model="msg" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  msg: String = "test2";
  out(): void {
    alert(this.msg);
  }
  destroyed(): void {
    alert("kkkkkk");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
