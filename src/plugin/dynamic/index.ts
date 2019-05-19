import dynamic from "./dynamic";
let DynamicUi: any = {};

DynamicUi.install = function(Vue: any, options: any = {}) {
  const DynamicConstructor = Vue.extend(dynamic);
  let Dynamic = async function(
    el: HTMLElement,
    component: any,
    props: Object,
    on: Object,
    slots: Object
  ) {
    let ChildConstructor: any;
    if (typeof component !== "string") {
      ChildConstructor = Vue.extend(component);
    } else {
      ChildConstructor = component;
    }

    // console.log(new ChildConstructor());
    const instance = new DynamicConstructor(options);
    instance.$set(instance.$data, "child", ChildConstructor);
    instance.$set(instance.$data, "props", props || {});
    instance.$set(instance.$data, "on", on || {});
    instance.$set(instance.$data, "slotsObject", slots || []);
    if (el) {
      el.appendChild(instance.$mount().$el);
    } else {
      document.body.appendChild(instance.$mount().$el);
    }
    return instance;
  };

  Vue.prototype.$dynamic = Dynamic;
};
export default DynamicUi;
