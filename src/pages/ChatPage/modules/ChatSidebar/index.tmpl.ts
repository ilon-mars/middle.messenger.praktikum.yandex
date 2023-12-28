export const tmpl = `
  <aside class="chat-sidebar">
    <header class="{{ $style.header }}">
      {{{link}}}
      {{{form}}}
    </header>

    {{{ chatList }}}
    {{{ addChatButton }}}
    {{{ addChatModal }}}
  </aside>
`;
