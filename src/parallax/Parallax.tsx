import { defineComponent, ref, onMounted, computed, CSSProperties } from 'vue';
import { createNamespace } from 'vant/es/utils';
import useTranslatable from './translatable';

const [name, bem] = createNamespace('parallax');

export default defineComponent({
  name,
  props: {
    alt: String,
    height: {
      type: Number,
      default: 500,
    },
    src: String,
  },
  setup(props, { slots }) {
    const rootRef = ref<HTMLDivElement>();
    const isBooted = ref<boolean>(false);
    const imgRef = ref<HTMLImageElement>();
    const objHeight = () => {
      return imgRef.value?.naturalHeight || 0;
    };

    const { prepare, parallax } = useTranslatable({
      el: rootRef,
      height: props.height,
      getHeight: objHeight,
    });

    onMounted(() => {
      if (!imgRef.value) return;
      if (imgRef.value?.complete) {
        prepare();
      } else {
        imgRef.value?.addEventListener('load', prepare, false);
      }
      isBooted.value = true;
    });

    const styles = computed<CSSProperties>(() => {
      return {
        display: 'block',
        opacity: isBooted.value ? 1 : 0,
        transform: `translate(-50%, ${parallax.value}px)`,
      };
    });
    return () => {
      const rootStyle = {
        height: `${props.height}px`,
      };
      return (
        <div ref={rootRef} class={bem()} style={rootStyle}>
          <div class={bem('image-container')}>
            <img
              ref={imgRef}
              class={bem('image')}
              style={styles.value}
              src={props.src}
              alt={props.alt}
            />
          </div>
          <div class={bem('content')}>{slots.default && slots.default()}</div>
        </div>
      );
    };
  },
});
