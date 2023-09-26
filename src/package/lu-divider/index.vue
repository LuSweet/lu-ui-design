<!--
 * @Author: Lu Zhu
 * @Date: 2023-09-26 23:25:22
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-09-26 23:47:43
 * @FilePath: \lu-ui-design\src\package\lu-divider\index.vue
 * @Description: 分割线组件
-->
<template>
<div :class="classDivider">
    <div :class="classText" v-if="direction === 'horizontal'" >
        <slot></slot>
    
    </div>
</div>
</template>
<script>
const prefixCls = 'lu-divider'
export default {
  name: "lu-divider", //组件名
  props: {
    orientation: {
        type: String,
        default: 'center',
        valid: (value) => {
            return ['center', 'left', 'right'].includes(value)
        }
    },
    direction: {
        type: String,
        default: 'horizontal',
        valid: (value) =>{
            return ['horizontal', 'vertical'].includes(value)
        }
    }
  },
  computed: {
    classText(){
        return [
            `${prefixCls}_text`,
            `${prefixCls}_${this.orientation}`
        ]
    },
    classDivider(){
        return [
            `${prefixCls}`,
            `${prefixCls}_${this.direction}`
        ]
    }
  }
};
</script>
<style scoped lang="less">
.lu-divider_horizontal{
    height: 1px;
    margin: 16px 0;
    background: #cacaca;
    position: relative;
}
.lu-divider_vertical{
    display: inline-block;
    width: 1px;
    height: 1em;
    background: #cacaca;
    vertical-align: middle;
    margin: 0 8px;
    
}
.lu-divider_text{
    position: absolute;
    background: #ffffff;
    padding:  0 16px;
    transform: translateX(-50%);
}
.lu-divider_center{
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.lu-divider_left{
    left: 20%;
    transform: translateX(-50%) translateY(-50%);
}

.lu-divider_right{
    left: 70%;
    transform: translateX(-50%) translateY(-50%);
}
</style>