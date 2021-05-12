import { defineComponent, computed, CSSProperties } from 'vue';
import { createNamespace } from 'vant/es/utils';

const [name, bem] = createNamespace('responsive');

export default defineComponent({
  name,
  props: {
    aspectRatio: Number,
    contentClass: String,
  },
  setup(props, { slots }) {
    const aspectStyle = computed<CSSProperties | undefined>(() => {
      return props.aspectRatio
        ? { paddingBottom: 100 / props.aspectRatio + '%' }
        : undefined;
    });

    const genSizer = () => {
      if (!aspectStyle.value) return [];
      return <div style={aspectStyle.value} class={bem('sizer')} />;
    };

    const genContent = () => {
      return (
        <div class={[bem('content'), props.contentClass]}>
          {slots.default && slots.default()}
        </div>
      );
    };

    return () => {
      return (
        <div class={bem()}>
          {genSizer()}
          {genContent()}
        </div>
      );
    };
  },
});
