export const tmpl = `
  <button class="{{ $style.button }}">
    {{#if hasText}}
      <span class="{{ $style.text }}">{{ text }}</span>
    {{/if}}

    {{#if icon}}
      <span class="{{ $style.icon }}">{{{ icon }}}</span>
    {{/if}}
  </button>
`;
