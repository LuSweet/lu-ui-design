<!--
 * @Author: Lu Zhu
 * @Date: 2023-09-20 23:56:09
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-10-10 23:43:32
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


    <lu-button type="primary" @click="drawerVisible= !drawerVisible">抽屉测试</lu-button>
    <lu-drawer :visible="drawerVisible" title="抽屉测试" @open="openDrawer" @close="closeDrawer">
      <ul>
        <li>这是抽屉</li>
        <li>这是抽屉</li>
        <li>这是抽屉</li>
        <li>这是抽屉</li>
        <li>这是抽屉</li>
      </ul>
      <template slot="footer">
        <lu-button @click="drawerVisible = !drawerVisible" style="float: right;">关闭</lu-button>
      </template>
    </lu-drawer>
  </div>
</template>

<script>
import luButton from './package/lu-button/index.vue'
import luDialog from './package/lu-dialog/index.vue'
import luCard from './package/lu-card/index.vue'
import luDivider from './package/lu-divider/index.vue'
import luLink from './package/lu-link/index.vue'
import luDrawer from './package/lu-drawer/index.vue'
export default {
  name: 'App',
  components: {
    luButton,
    luDialog,
    luCard,
    luDivider,
    luLink,
    luDrawer,
  },
  data(){
    return{
      visible: false,
      drawerVisible: false,
    }
  },
  methods: {
    openDialog(){
      console.log("打开弹框的回调")
    },
    closeDialog(){
      console.log("关闭弹框的回调")
    },
    openDrawer(){
      console.log("打开抽屉的回调")
    },
    closeDrawer(){
      console.log("关闭抽屉的回调")
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
