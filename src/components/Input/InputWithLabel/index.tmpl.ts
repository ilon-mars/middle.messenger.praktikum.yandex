export const tmpl = `
  <div class="{{ $style.field }}">
    <label for="{{ name }}" class="{{ $style.label }}">{{ labelText }}</label>
    {{{input}}}
    <span class="{{ $style.errorText }}">{{ errorText }}</span>
  </div>
`;
