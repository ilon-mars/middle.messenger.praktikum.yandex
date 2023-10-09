export const tmpl = `
  <header class="{{ $style.header }}">
    <a href="{{ to }}" class="{{ $style.link }}">Профиль</a>
    {{{ searchInput }}}
  </header>

  <ul class="{{ $style.chats }}">
    {{{ chats }}}
  </ul>
`;
