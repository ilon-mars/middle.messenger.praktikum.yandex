export const tmpl = `
  <div class="{{ $style.avatar }}">
    <picture class="{{ $style.imageWrapper }}">
      <img class="{{ $style.image }}">
    </picture>

    <span class="h3">{{ name }}</span>
    <span class="{{ $style.overlay }}">Поменять аватар</span>
  </div>
`;
