import { DirectiveBinding } from 'vue';

interface ClickOutsideBindingArgs {
  handler: (e: Event) => void;
  closeConditional?: (e: Event) => boolean;
  include?: () => HTMLElement[];
  getContainer?: () => HTMLElement;
}

type ClickOutsideBindingArgsType =
  | ((e: Event) => void)
  | ClickOutsideBindingArgs;

type ClickOutsideDirective = DirectiveBinding<ClickOutsideBindingArgsType>;

interface ClickOutsideElement extends HTMLElement {
  _clickOutside?: (e: Event) => void;
  _container?: HTMLElement;
}

const defaultConditional = () => {
  return true;
};

const defaultGetContainer = (): HTMLElement => {
  return document.querySelector('#app') || document.body;
};

const convertOptions = (
  args: ClickOutsideBindingArgsType
): Required<ClickOutsideBindingArgs> => {
  const customerOptions =
    typeof args === 'function'
      ? {
          handler: args,
        }
      : args;
  return Object.assign(
    {},
    {
      closeConditional: defaultConditional,
      getContainer: defaultGetContainer,
      include: () => [],
    },
    customerOptions
  );
};

const directive = (
  e: PointerEvent,
  el: HTMLElement,
  binding: DirectiveBinding
) => {
  if (!e) return;
  const options = convertOptions(binding.value);
  if (!options.closeConditional(e)) {
    return;
  }
  const elements = options.include() || [];
  elements.push(el);
  if (!elements.some((el) => el.contains(e.target as Node))) {
    setTimeout(() => {
      options.handler && options.handler(e);
    }, 0);
  }
};

export const ClickOutside = {
  mounted(el: ClickOutsideElement, binding: ClickOutsideDirective) {
    const { getContainer } = convertOptions(binding.value);
    const onClick = (e: Event) => directive(e as PointerEvent, el, binding);
    const container = getContainer();
    container.addEventListener('click', onClick, true);
    el._clickOutside = onClick;
    el._container = container;
  },
  unmounted(el: ClickOutsideElement) {
    if (!el._clickOutside || !el._container) return;
    if (el._container) {
      el._container.removeEventListener('click', el._clickOutside, true);
    }
    delete el._clickOutside;
    delete el._container;
  },
};

export default ClickOutside;
