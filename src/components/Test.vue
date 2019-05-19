<template>
  <div class="dailog">
    {{ msg }}
    <button @click="out">click me to close</button>
    <slot></slot>
    <slot name="slotsbane"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  instance: any;
  out(): void {
    this.$emit("Out");
    this.instance.destroyUi();
  }
  show(instance: any): void {
    this.instance = instance;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dailog {
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  color: #fff;
}
</style>
