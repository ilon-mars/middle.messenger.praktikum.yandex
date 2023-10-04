export const tmpl = `
  <a href="{{ to }}" class="{{ $style.button }}">
    <span class="{{ $style.text }}">{{ text }}</span>

    {{#if hasIcon}}
      <span class="{{ $style.icon }}">{{{ icon }}}</span>
    {{/if}}
  </a>
`;
