export const tmpl = `
  <span class="{{ $style.text }}">{{ text }}</span>

  {{#if hasIcon}}
    <span class="{{ $style.icon }}">{{{ icon }}}</span>
  {{/if}}
`;
