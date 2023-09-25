<!--
 * @Author: Lu Zhu
 * @Date: 2023-09-20 23:32:28
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-09-22 00:01:18
 * @FilePath: \lu-ui-design\src\package\lu-button\index.vue
 * @Description: button组件
-->
<template>
    <button :class="classes" @click="handleClick">
      <slot></slot>
    </button>
</template>
<script>
const prefixCls = 'lu-button'
export default {
  name: "lu-button", //组件名
  props: {
    type: {
      type: String,
      default: 'default',
    }
  },
  computed: {
    classes(){
        return [
        `${prefixCls}_${this.type}`
        ]
    }
  },
  methods: {
    handleClick(){
        this.$emit('click')
    }
  }
  
};
</script>
<style scoped>
button{
  color: white;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
}

.lu-button_default{
    color: black;
    border: black;
}
.lu-button_primary{
  background: #5a9cf8;
}

.lu-button_warn{
  background: #ecd426;
}

.lu-button_error{
  background: #e94d47;
}
</style>