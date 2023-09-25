<!--
 * @Author: Lu Zhu
 * @Date: 2023-09-21 00:18:00
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-09-22 00:11:04
 * @FilePath: \lu-ui-design\src\package\lu-dialog\index.vue
 * @Description: 弹框组件
-->
<template>
    <div class="lu-dialog_wrapper" v-if="visible">
        <div class="lu-dialog">
            <div class="lu-dialog_header">
                <slot name="header">{{ title }}</slot>
            </div>
            <div class="lu-dialog_body">
                <slot></slot>
            </div>
            <div class="lu-dialog_footer" :class="{centerFont: center, endFont: !center}">
                <slot name="footer">
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
// import { onMounted } from 'vue';

export default {
  name: "lu-dialog", //组件名
  props: {
    visible: {
        type: Boolean,
        default: false,
        required: true,
    },
    title: {
        type: String,
        default: '默认标题'
    },
    center: {
        type: Boolean,
        default: false
    }
  },
  watch: {
    visible(newValue){
        this.$emit(newValue ? 'open' : 'close')
    }
  }
};
</script>
<style scoped>
.lu-dialog_wrapper{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1001;
    background: #a3a3a342;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lu-dialog {
    position: relative;
    background: #ffffff;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: #d5d5d54d;
    width: 30%;
    min-width: 400px
}

.lu-dialog_header{
    padding: 16px;
    font-size: 20px;
}
.lu-dialog_body{
    padding: 16px;
    min-height: 160px;
}
.lu-dialog_footer{
    padding: 16px;
}

.endFont{
    text-align: end;
}

.centerFont{
    text-align: center;
}
</style>