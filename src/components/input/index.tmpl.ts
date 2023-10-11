export const inputWithLabelTmpl = `
  <label for="{{ name }}" class="{{ $style.label }}">{{ labelText }}</label>

  {{{input}}}

  {{#if errorText}}
    <span class="{{ $style.errorText }}">{{ errorText }}</span>
  {{/if}}
`;
