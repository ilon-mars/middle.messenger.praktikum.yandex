export const tmpl = `
  <div class="{{ $style.field }} profile-card">
    <label for="{{ name }}" class="{{ $style.label }}">{{ labelText }}</label>

    <input
      id="{{ name }}"
      name="{{ name }}"
      value="{{ value }}"
      class="{{ $style.input }} {{#if errorText}} {{ $style.error }} {{/if}}"
    />

    {{#if errorText}}
      <span class="{{ $style.errorText }}">{{ errorText }}</span>
    {{/if}}
  </div>
`;
