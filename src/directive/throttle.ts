const throttle = (func: Function, time: number, ctx: any) => {
  let lastTime = new Date();
  let timer: any;
  const rtn = (...params: Array<any>) => {
    // console.log(new Date().getTime() - lastTime.getTime());
    if (lastTime && new Date().getTime() - lastTime.getTime() < time) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(ctx, params);
        lastTime = new Date();
      }, time);
    } else {
      func.apply(ctx, params);
      lastTime = new Date();
    }
  };
  return rtn;
};

function setThrottleDer(time: number): any {
  let throttleDer = {
    bind(el: any, binding: any, vnode: any) {
      //过来的函数
      binding.value;
      //获取绑定的名称
      binding.arg;
      //名称后的参数
      binding.modifiers;

      const debounced = throttle(binding.value, time, vnode);
      let options = {
        capture: binding.modifiers.stop || false,
        passive: binding.modifiers.passive || false,
        once: binding.modifiers.once || false,
        prevent: binding.modifiers.prevent || false
      };
      vnode._debounced = debounced;
      let fn = (event: any) => {
        let e = event ? event : window.event;
        if (options.prevent) e.preventDefault();
        debounced();
      };
      el.addEventListener(binding.arg, fn, options);
      el._debounced = fn;
    },
    inserted() {},
    update() {},
    unbind(el: Element | any, binding: any, vnode: any) {
      vnode._debounced = null;
      el.removeEventListener(binding.arg, el._debounced);
    }
  };
  return throttleDer;
}
export default setThrottleDer;
