export const tmpl = `
  <header class="{{ $style.header }}">
    <a href="{{ to }}" class="{{ $style.link }}">Профиль</a>
    <form action="#" name="search" class="{{ $style.searchWrapper }}">
      <input type="search" class="{{ $style.search }}" placeholder="Поиск" name="search" />
    </form>
  </header>

  <ul class="{{ $style.chats }}">
    {{{ chats }}}
  </ul>
`;
