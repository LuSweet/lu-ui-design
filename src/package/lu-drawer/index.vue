<template>
    <div>
        <div class="lu-drawer_wrapper" v-if="visible">
            <div :class="classes">
                <div class="lu-drawer_header">
                    <slot name="header">{{ title }}</slot>
                </div>
                <div class="lu-drawer_body">
                    <slot>默认内容</slot>
                </div>
                <div class="lu-drawer_footer">
                    <slot name="footer">
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const prefixCls = 'lu-drawer';
export default {
    name: "lu-drawer",
    props: {
        visible: {
            type: Boolean,
            required: true,
            default: false,
        },
        title: {
            type: String,
            default: '默认标题',
        },
        direction: {
            type: String,
            default: 'left',
            valid: (value) => {
                return ['left', 'right', 'top', 'bottom'].includes(value)
            }
        }
    },
    computed: {
        classes(){
            return [
                `${prefixCls}`,
                `${prefixCls}_${this.direction}`
            ]
        }
    },
    watch: {
        visible(newValue){
            this.$emit(newValue ? 'open' : 'close');
        }
    },
}
</script>
<style lang="less" scoped>
.lu-drawer_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    z-index: 2001;
    background-color: #a3a3a342;

    .lu-drawer {
        position: absolute;
        background: #fff;
        box-sizing: border-box;
        box-shadow: #d5d5d54d;
        display: flex;
        flex-direction: column;
    }

    .lu-drawer_header {
        padding: 12px;
        font-size: 20px;
        border-bottom: 1px solid #dddddd;
    }

    .lu-drawer_body {
        padding: 16px;
        flex-grow: 1;
        min-height: 160px;
    }

    .lu-drawer_footer {
        padding: 16px;
    }
}

.lu-drawer_left{
    left: 0;
    width: 30%;
    height: 100%;
}

.lu-drawer_right{
    right: 0;
    width: 30%;
    height: 100%;
}

.lu-drawer_top{
    top: 0;
    height: 30%;
    width: 100%;
}


.lu-drawer_bottom{
    bottom: 0;
    height: 30%;
    width: 100%;
}
</style>
