<template>
    <component :is="tag" :style="style">
        <slot></slot>
    </component>
</template>

<script>
import { computed, inject } from 'vue';

export default {
    props: {
        tag: { type: String, default: 'div' },
        inheritComponentStyle: { type: Boolean, default: false },
    },
    setup(props) {
        const componentStyle = inject('componentStyle');
        const layoutStyle = wwLib.wwElement.useLayoutStyle()?.value;

        const style = computed(() => ({
            ...(props.inheritComponentStyle ? componentStyle : {}),
            ...layoutStyle,
        }));

        return { style };
    },
};
</script>
