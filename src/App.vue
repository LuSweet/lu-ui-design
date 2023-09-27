<!--
 * @Author: Lu Zhu
 * @Date: 2023-09-20 23:56:09
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-09-28 00:32:46
 * @FilePath: \lu-ui-design\src\App.vue
 * @Description: 
-->
<template>
  <div id="app">
    这是测试
    <lu-button type="error" @click="visible = !visible">玩笑</lu-button>
    <lu-link>测试link</lu-link>
    <lu-divider>居中测试</lu-divider>
    <lu-card title="标2题" hover>
      <ul>
        <li>这是测试</li>
        <li>这是测试</li>
        <li>这是测试</li>
        <li>这是测试</li>
        <li>这是测试</li>
      </ul>
    </lu-card>
    <lu-dialog :visible="visible" @open="openDialog" @close="closeDialog" title="我的弹框">
      <ul>
        <li>这是测试</li>
        <li>这是测试</li>
        <li>这是测试</li>
        <li>这是测试</li>
        <li>这是测试</li>
      </ul>
      <div slot="footer">
        <lu-button type="primary" style="margin-right: 10px;">确定</lu-button>
        <lu-button @click="visible = false">取消</lu-button>
      </div>
    </lu-dialog>
  </div>
</template>

<script>
import luButton from './package/lu-button/index.vue'
import luDialog from './package/lu-dialog/index.vue'
import luCard from './package/lu-card/index.vue'
import luDivider from './package/lu-divider/index.vue'
import luLink from './package/lu-link/index.vue'
export default {
  name: 'App',
  components: {
    luButton,
    luDialog,
    luCard,
    luDivider,
    luLink,
  },
  data(){
    return{
      visible: false
    }
  },
  methods: {
    openDialog(){
      console.log("打开弹框的回调")
    },
    closeDialog(){
      console.log("关闭弹框的回调")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50;
  margin-top: 60px; */
}
</style>
