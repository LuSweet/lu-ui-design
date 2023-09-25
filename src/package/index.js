/*
 * @Author: Lu Zhu
 * @Date: 2023-09-20 23:36:40
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-09-21 00:02:19
 * @FilePath: \lu-ui-design\src\package\index.js
 * @Description: 批量组件注册
 */
// import LuButton from "../package/lu-button/index.vue"; // 引入封装好的组件
// const luComponents = [LuButton]; // 将来如果有其它组件,都可以写到这个数组里

// // 批量组件注册
// const install = function (Vue) {
//     luComponents.forEach((item) => {
//     Vue.component(item.name, item);
//   });
// };


// 1、优化重复的import代码
// 2、require.context是webpack的api
// 三个参数（路径、是否匹配子集、规则）
const requireComponent = require.context('./', true, /\.vue$/);
const install = (Vue) => {
    if(install.installed) return;
    requireComponent.keys().forEach(item => {
        const config = requireComponent(item)
        const name = config.default.name;
        Vue.component(name, config.default || config);
    });

}

if(typeof window !== undefined && window.Vue){
    install(window.Vue)
}

export default {install}


// export default install; // 这个方法以后再使用的时候可以被use调用