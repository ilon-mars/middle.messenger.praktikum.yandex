export const tmpl = `
  <span class="{{ $style.text }}">{{ text }}</span>

  {{#if icon}}
    <span class="{{ $style.icon }}">{{{ icon }}}</span>
  {{/if}}
`;
