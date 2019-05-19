<template>
  <div class="home">
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
  instance: any;
  openA(): void {
    this.$dynamic("", Test, { msg: "我是root" }, { Out: this.TestM }, [
      {
        child: Test2,
        template: { slot: "slotsbane" }
      }
    ]).then((instance: any) => {
      instance.$children[0].show(instance);
    });
  }
  TestM(): void {
    console.log("emit method");
    // console.log(this.instance.destroyUi());
  }
  mounted(): void {}
}
</script>
