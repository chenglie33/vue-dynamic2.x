<template>
  <div class="hello" @click="out">
    {{ msg }}
    <slot></slot>
    <slot name="slotsbane"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  out(): void {
    this.$emit("Out");
  }
  print(): void {
    alert("woshi");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
