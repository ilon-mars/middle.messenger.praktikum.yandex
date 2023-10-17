export const tmpl = `
  <img src="{{ avatarUrl }}" class="{{ $style.avatar }}"/>
  <span class="{{ $style.name }}">{{ name }}</span>
  <p class="{{ $style.text }}">{{ text }}</p>
  <span class="{{ $style.time }}">{{ time }}</span>

  {{#if counter}}
    <span class="{{ $style.counter }}">{{ counter }}</span>
  {{/if}}
`;
