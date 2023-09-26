export const tmpl = `
  <dialog class="{{ $style.modal }}" open>
    <h2 class="h2 {{ $style.title }}">{{ title }}</h2>
    {{{ content }}}
    {{{ controls }}}
  </dialog>
`;