<template>
    <div :class="classes" :style="{ width: size + 'px', height: size + 'px', lineHeight: size + 'px'}">
        <slot>
            A
        </slot>
    </div>
</template>
<script>
const prefixCls = 'lu-avatar';
export default {
    name: 'lu-avatar',
    props: {
        shape: {
            type: String,
            default: 'circle',
        },
        size: {
            type: Number,
            default: 40,
        }
    },
    computed: {
        classes(){
            return [
                `${prefixCls}`,
                `${prefixCls}_${this.shape}`
            ]
        }
    },
}
</script>
<style lang="less" scoped>
.lu-avatar{
    background: #d1d1d1;
    text-align: center;
    line-height: 1;
    font-size: 20px;
}
.lu-avatar_circle{
    border-radius: 50px;
}

</style>
