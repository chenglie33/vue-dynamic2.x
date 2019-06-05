<template>
  <div class="home">
    <button @click="openA">弹窗打开</button>
    <button v-debounce:click="clickconsole">防抖指令</button>
    <a href="www.baidu.com" v-debounce:click.prevent="clickconsole">防抖指令</a>
    <input v-model="testDebounce" />
    {{ msg }}
    <div
      v-throttle:scroll.passive="scor"
      style="width:200px;background:#dfdfdf;height:300px;overflow:auto"
    >
      <div style="width:100px;background:#ef3e4a;height:2000px"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
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
  testDebounce = "";
  @Watch("testDebounce")
  testDebounceChange(v: string, ov: string) {
    this.changes(v, this);
  }
  changes = Vue._debounce((v: string | number, ctx: any) => {
    ctx.msg++;
    console.log(v, this);
  });
  scor(): void {
    console.log(this);
  }
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
  clickconsole(): void {
    console.log("方法指令进来了", this);
    this.msg = 222;
  }
  mounted(): void {}
}
</script>
