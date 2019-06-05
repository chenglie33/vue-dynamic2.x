import Vue from "vue";
declare module "vue/types/vue" {
  interface Vue {
    $dynamic: any;
  }
  interface VueConstructor {
    _debounce: Function;
  }
}
