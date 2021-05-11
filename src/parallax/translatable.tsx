import { ref, computed, onBeforeUnmount, reactive } from 'vue';
import { Ref } from '@vue/reactivity';

export interface IUseTranslatableOptions {
  el: Ref<HTMLDivElement | undefined>;
  height: number;
  getHeight: () => number;
}

const useTranslatable = ({
  el,
  height,
  getHeight,
}: IUseTranslatableOptions) => {
  const parallax = ref(0);
  const pos = reactive({
    elOffsetTop: 0,
    parallaxDist: 0,
    percentScrolled: 0,
    scrollTop: 0,
    windowHeight: 0,
    windowBottom: 0,
  });

  const imgHeight = computed<number>(getHeight);

  const calcDimensions = () => {
    const offset = el.value?.getBoundingClientRect() || { top: 0 };
    pos.scrollTop = window.pageYOffset;
    pos.parallaxDist = imgHeight.value - height;
    pos.elOffsetTop = offset.top + pos.scrollTop;
    pos.windowHeight = window.innerHeight;
    pos.windowBottom = pos.scrollTop + pos.windowHeight;
  };

  const translate = () => {
    calcDimensions();
    pos.percentScrolled =
      (pos.windowBottom - pos.elOffsetTop) / (height + pos.windowHeight);
    parallax.value = Math.round(pos.parallaxDist * pos.percentScrolled);
  };
  const listeners = () => {
    window.addEventListener('scroll', translate, false);
    window.addEventListener('resize', translate, false);
  };

  const prepare = () => {
    translate();
    listeners();
  };

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', translate, false);
    window.removeEventListener('resize', translate, false);
  });

  return {
    translate,
    listeners,
    prepare,
    parallax,
  };
};

export default useTranslatable;
