export const tmpl = `
  {{{avatar}}}

  <button class="{{ $style.menuButton }}">
    <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="1.5" cy="2" r="1.5" />
      <circle cx="1.5" cy="8" r="1.5" />
      <circle cx="1.5" cy="14" r="1.5" />
    </svg>
  </button>
`;

/*
<div class="{{ $style.avatar }}">
      <picture class="{{ $style.imageWrapper }}">
        <img class="{{ $style.image }}">
      </picture>

      <span class="{{ $style.name }}">{{ name }}</span>
    </div>
*/
