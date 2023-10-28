export const tmpl = `
  <div class="{{ $style.wrapper }}">
    {{#if imageLink}}
      <img class="{{ $style.image }} src="{{{imageLink}}}" />
    {{else}}
      <p>{{ text }}</p>
    {{/if}}
    <div class="{{ $style.messageDetails }}">
      {{#if status}}
        <div class="{{ $style.status }}"></div>
      {{/if}}
      <time class="{{ $style.time }}">{{ time }}</time>
    </div>
  </div>
`;
