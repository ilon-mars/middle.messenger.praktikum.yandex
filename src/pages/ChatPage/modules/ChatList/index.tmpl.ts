export const tmpl = `
  <header class="{{ $style.header }}">
    {{{link}}}
    <form name="search" action="#" class="{{ $style.searchWrapper }}">
      {{{ searchInput }}}
    </form>
  </header>

  <ul class="{{ $style.chats }}">
    {{{chats}}}
  </ul>
`;
