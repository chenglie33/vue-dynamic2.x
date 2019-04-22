import { Component, Prop, Vue } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";
import { DynamicImpl } from "./dynamicImpl";

@Component
export default class HelloWorld extends Vue {
  child = "";
  props = {};
  on = {};
  slotsObject: Array<DynamicImpl> = [];
  async destroyUi(): Promise<string> {
    this.$destroy();
    // console.log(this.$el.parentNode.removeChild);
    this.$el.parentNode!.removeChild(this.$el);
    return "";
  }
  render(h: CreateElement): VNode {
    return h(
      this.child,
      {
        props: this.props,
        on: this.on,
        ref: "childInstance"
      },
      this.slotsObject.map((item, index) => {
        return h(item.child, Object.assign({}, item.template));
      })
    );
  }
}
