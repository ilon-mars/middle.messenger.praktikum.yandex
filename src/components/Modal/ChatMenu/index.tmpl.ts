export const tmpl = `
  <div class="{{ $style.chatMenu }}" id="chat-menu" data-layout="flex">
    {{{ addUser }}}
    {{{ removeUser }}}
    {{{ deleteChat }}}

    {{{ addUserModal }}}
    {{{ removeUserModal }}}
  </div>
`;
