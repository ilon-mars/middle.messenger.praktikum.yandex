export const baseInputTmpl = `
  <label for="{{ name }}" class="{{ $style.label }}">{{ labelText }}</label>

  <input
    id="{{ name }}"
    name="{{ name }}"
    value="{{ value }}"
    type="{{#if type }}{{ type }}{{ else }}text{{/if}}"
    class="{{ $style.input }} {{#if errorText}} {{ $style.error }} {{/if}}"
  />

  {{#if errorText}}
    <span class="{{ $style.errorText }}">{{ errorText }}</span>
  {{/if}}
`;
