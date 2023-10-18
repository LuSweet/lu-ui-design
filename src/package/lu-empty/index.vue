<!--
 * @Author: Lu Zhu
 * @Date: 2023-10-18 23:04:18
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-10-18 23:18:55
 * @FilePath: \lu-ui-design\src\package\lu-empty\index.vue
 * @Description: lu-empty组件
-->
<template>
    <div class="lu-empty">
        <div class="lu-empty_image">
            <slot name="image">
                <img src="../../assets/logo.png" alt="">
            </slot>
        </div>
        <div class="lu-empty_title">
            <slot name="title">
                {{ title }}
            </slot>
        </div>
        <div class="lu-empty_footer">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "lu-empty",
    props: {
        title: {
            type: String,
            default: "暂无数据",
        }
    },
}
</script>
<style lang="less" scoped>
.lu-empty{
    text-align: center;
    padding: 30px 0;
    .lu-empty_title{
        font-size: 20px;
        padding: 16px;
    }
}
</style>
