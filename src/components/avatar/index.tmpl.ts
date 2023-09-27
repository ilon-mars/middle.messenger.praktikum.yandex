export const tmpl = `
  <div class="{{ $style.avatar }}">
    <picture class="{{ $style.imageWrapper }}">
      <img class="{{ $style.image }}">
    </picture>

    <span class="h3">{{ name }}</span>
    <a href="{{ to }}" class="{{ $style.overlay }}">Поменять аватар</a>
  </div>
`;
