export const tmpl = `
  <header class="{{ $style.header }}">
    <a href="{{ to }}" class="{{ $style.link }}">Профиль</a>
    <input type="search" class="{{ $style.search }}" placeholder="Поиск" />
  </header>

  <ul class="{{ $style.chats }}">
    {{{ chats }}}
  </ul>
`;
