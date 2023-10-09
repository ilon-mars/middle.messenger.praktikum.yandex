export const tmpl = `
  <header class="{{ $style.header }}">
    {{{link}}}
    {{{ searchInput }}}
  </header>

  <ul class="{{ $style.chats }}">
    {{{chats}}}
  </ul>
`;
