export const tmpl = `
  <label for="{{ name }}" class="{{ $style.label }}">{{ labelText }}</label>

  {{{input}}}

  <span class="{{ $style.errorText }}">{{ errorText }}</span>
`;
