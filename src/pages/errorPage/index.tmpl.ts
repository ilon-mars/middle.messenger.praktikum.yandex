export const tmpl = `
  <section class="{{ $style.container }}">
    <div class="{{ $style.content }}">
      <span class="{{ $style.errorNumber }}">{{ errorNumber }}</span>
      <span class="{{ $style.text }}">{{ text }}</span>
      {{{ link }}}
    </div>
  </section>
`;
