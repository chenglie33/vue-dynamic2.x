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
      let fns: Function;
      let args: Array<any>;
      if (typeof binding.value === "object") {
        fns = binding.value.fn;
        args = binding.value.arg;
      } else {
        fns = binding.value;
        args = [];
      }
      const debounced = throttle(fns, time, vnode);
      let options = {
        capture: binding.modifiers.capture || false,
        passive: binding.modifiers.passive || false,
        once: binding.modifiers.once || false,
        prevent: binding.modifiers.prevent || false
      };
      vnode._debounced = debounced;
      let fn = (event: any) => {
        let e = event ? event : window.event;
        if (options.prevent) e.preventDefault();
        if (binding.modifiers.stop) {
          window.event
            ? (window.event.cancelBubble = true)
            : e.stopPropagation();
        }

        if (binding.modifiers.self && e.target !== el) {
          return;
        }
        debounced(...args);
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
