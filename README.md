# vue-preventedup


> 添加防抖指令
> 添加节流指令
> 添加防抖全局方法

## Build Setup

``` bash
# install dependencies
npm i vue-preventedup-plugin

#how to use
import Debounce from vue-preventedup-plugin
Vue.use(Debounce, { DebounceTime: 200, ThrottleTime: 200 })
<button v-debounce:click="clickconsole">防抖指令</button>
<a href="www.baidu.com" v-debounce:click.prevent="clickconsole">防抖指令</a>
传入参数用法
v-debounce:click.prevent.self="{ fn: Function, arg: [2] }" arg类似arguments
 <div
      v-throttle:scroll.passive="scor"
      style="width:200px;background:#dfdfdf;height:300px;overflow:auto"
    >
      <div style="width:100px;background:#ef3e4a;height:2000px"></div>
    </div>



    //方法的使用 主意这里是闭包 需要传入上下文并且 条件组件销毁是处理掉闭包的占用内存  github代码可以直接运行
    Vue._debounce((v: string | number, ctx: any) => {
    ctx.msg++;
    console.log(v, this);
  })
```




