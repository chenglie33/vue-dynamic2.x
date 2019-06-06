<template>
  <div class="home">
    <button @click="openA(1)">弹窗打开</button>
    <button v-debounce:click="clickconsole">防抖指令11</button>
    <a
      href="www.baidu.com"
      v-debounce:click.prevent="{ fn: clickconsole, arg: [1, 2] }"
      >防抖指令</a
    >
    <div
      style="width:100px;height:100px;background-color:#dfdfdf"
      v-debounce:click.prevent.self="{ fn: alertv, arg: [2] }"
    >
      <div
        style="width:50px;height: 50px"
        v-debounce:click.prevent.self="{ fn: alertv, arg: [1] }"
      ></div>
    </div>
    <div v-debounce:click="{ fn: alertv, arg: [1] }">
      1
      <a href="www" v-debounce:click.prevent.self="{ fn: alertv, arg: [2] }"
        >2
        <div v-debounce:click.stop.prevent="{ fn: alertv, arg: [3] }">3</div>
      </a>
    </div>
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
  alert = alert;
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
  alertv(index: any): void {
    alert(index);
  }
  TestM(): void {
    console.log("emit method");
    // console.log(this.instance.destroyUi());
  }
  clickconsole(index: any): void {
    console.log("方法指令进来了", this, index);
    // this.msg = 222;
  }
  mounted(): void {}
}
</script>
