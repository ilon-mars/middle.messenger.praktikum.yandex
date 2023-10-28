export const tmpl = `
  <div class="{{ $style.avatar }}">
    <picture class="{{ $style.imageWrapper }}">
      <img class="{{ $style.image }}">
    </picture>
    <span class="h3 {{$style.name}}">{{ name }}</span>
    {{#if to}}
      <a href="{{ to }}" class="{{ $style.overlay }}">Поменять аватар</a>
    {{/if}}
  </div>
`;
