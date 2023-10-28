export const tmpl = `
  <form class="{{ $style.form }}">
    <div class="{{ $style.inputs }}">
      {{{ oldPassword }}}
      {{{ newPassword }}}
      {{{ repeatPassword }}}
    </div>
    <div class="{{ $style.controls }}">
      {{{ saveButton }}}
    </div>
  </form>
`;
