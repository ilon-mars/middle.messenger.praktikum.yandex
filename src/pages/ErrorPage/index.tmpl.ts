export const tmpl = `
  <div class="{{ $style.content }}">
    <span class="{{ $style.errorNumber }}">{{ pageText.errorNumber }}</span>
    <span class="{{ $style.text }}">{{ pageText.text }}</span>
    {{{ link }}}
  </div>
`;
