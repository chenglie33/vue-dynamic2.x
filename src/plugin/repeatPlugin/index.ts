import setdebounceDer from "../../directive/debounce";
import setThrottleDer from "../../directive/throttle";
let Debounce: any = {};
Debounce.install = function(Vue: any, options: any = {}) {
  Vue.directive("debounce", setdebounceDer(options.DebounceTime));
  Vue.directive("throttle", setThrottleDer(options.ThrottleTime));
  Vue._debounceTime = options.time;
  Vue._debounce = (func: Function, ctx: any) => {
    let timer: any;
    const rtn = (...params: Array<any>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(ctx, params);
      }, Vue._debounceTime);
    };
    return rtn;
  };
};
export default Debounce;
