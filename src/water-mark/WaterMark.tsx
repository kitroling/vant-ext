import { computed, CSSProperties, defineComponent, ref } from 'vue';
import { createNamespace } from 'vant/es/utils';

const [name, bem] = createNamespace('water-mark');

// todo use canvas
// const useCanvasDraw = () => {
//   const cvsRef = ref<HTMLCanvasElement>();
//   return () => {
//     return <canvas ref={cvsRef} class={bem('canvas')} />;
//   };
// }

export default defineComponent({
  name,
  props: {
    content: String,
    spacing: {
      type: [Number, String],
      default: '20vw',
    },
    rotate: {
      type: Number,
      default: -45,
    },
    opacity: {
      type: Number,
      default: 0.2,
    },
    repeat: {
      type: Boolean,
      default: true,
    },
    cover: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const markRef = ref<HTMLDivElement>();
    const repetition = ref<number>(50);

    const computedWrapStyle = computed<CSSProperties>(() => {
      return {
        opacity: props.opacity,
        transform: `rotate(${props.rotate}deg)`,
      };
    });

    const genCustom = () => {
      const emptyArray = Array.from(new Array(repetition.value));

      return emptyArray.map((_, i) => {
        const ulAttrs = {
          class: bem('line'),
          style: {
            marginBottom: props.spacing,
          },
        };
        return (
          <ul key={`line-${i}`} {...ulAttrs}>
            {emptyArray.map((__, j) => {
              const liAttrs = {
                class: bem('item'),
                style:
                  i % 2 === 0
                    ? {
                        marginLeft: props.spacing,
                      }
                    : {
                        marginRight: props.spacing,
                      },
              };
              // todo 传入参数，自定义渲染
              return (
                <li {...liAttrs} key={`item-${i}-${j}`}>
                  {(slots.watermark && slots.watermark()) || props.content}
                </li>
              );
            })}
          </ul>
        );
      });
    };

    const renderContent = computed(() => {
      return slots.watermark || props.content;
    });

    return () => {
      return (
        <div class={bem()}>
          <div class={bem('container')}>{slots.default && slots.default()}</div>
          {renderContent.value && (
            <div class={bem('list', { cover: props.cover })} ref={markRef}>
              <div class={bem('list-wrapper')} style={computedWrapStyle.value}>
                {genCustom()}
                {/* {slots.watermark ? genCustom() : genContent()} */}
              </div>
            </div>
          )}
        </div>
      );
    };
  },
});
