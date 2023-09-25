<!--
 * @Author: Lu Zhu
 * @Date: 2023-09-25 22:36:59
 * @LastEditors: Lu Zhu
 * @LastEditTime: 2023-09-25 23:18:51
 * @FilePath: \lu-ui-design\src\package\lu-card\index.vue
 * @Description: 
-->
<template>
    <div :class="classes">
        <div class="lu-card_header" v-if="showHeader">
            <slot name="header">{{ title }}</slot>
        </div>
        <div class="lu-card_body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
const prefixCls = 'lu-card'
export default {
    name: 'lu-card',
    props: {
        title: {
            type: String,
        },
        border: {
            type: Boolean,
            default: true
        },
        hover: {
            type: Boolean,
            default: false,
        },
        shadow: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}_border`]: this.border,
                    [`${prefixCls}_hover`]: this.hover,
                    [`${prefixCls}_shadow`]: this.shadow,
                }
            ]
        },
        showHeader() {
            return this.title || this.$slots.header
        }
    }
};
</script>
<style scoped lang="less">
.lu-card{
    border-radius: 4px;
    .lu-card_header{
        padding: 16px;
        border-bottom: 1px solid #dadada;
    }
    .lu-card_body{
        padding: 16px;
    }
}

.lu-card_border{
    border: 1px solid #dadada;
}

.lu-card_hover{
    &:hover{
        box-shadow: 0 2px 12px 0 #b5b5b5;
    }
}

.lu-card_shadow{
    box-shadow: 0 2px 12px 0 #b5b5b5;
}

</style>