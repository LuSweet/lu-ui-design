<template>
    <a :class="classes">
        <span>
            <slot></slot>
        </span>
    </a>
</template>
<script>
const prefixCls = 'lu-link'
export default {
    name: "lu-link", //组件名
    props: {
        type: {
            type: String,
            default: 'primary',
            valid: (value) => {
                return ['primary', 'success', 'warning', 'danger', 'info'].includes(value)
            }
        },
        underline: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                `${prefixCls}_${this.type}`,
                {[`${prefixCls}_underline`]: this.underline}
            ]
        }
    }
};
</script>
<style scoped lang="less">
.lu-link {
    color: #606266;
}

.lu-link_primary {
    color: #409eff;
}

.lu-link_success {
    color: #67c23a;
}

.lu-link_error {
    color: #e6a23c;
}

.lu-link_danger {
    color: #f56c6c
}

.lu-link_info {
    color: #909399
}

.lu-link_underline {
    &:hover {
        text-decoration: underline;
    }
}
</style>