<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="openA">弹窗打开</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Test from "@/components/Test.vue";
import Test2 from "@/components/Test2.vue";
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  msg = 1111;
  openA(): void {
    this.$dynamic("", Test, { msg: "我是root" }, { Out: this.TestM }, [
      {
        child: Test2,
        template: {}
      }
    ]).then((instance: any) => {
      console.log(instance);
      instance.destroyUi();
    });
  }
  TestM(): void {
    console.log(this.msg);
  }
  mounted(): void {}
}
</script>
