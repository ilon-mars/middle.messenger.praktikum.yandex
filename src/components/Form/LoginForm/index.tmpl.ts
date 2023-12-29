export const tmpl = `
  <form class="{{ $style.form }}">
    {{{ loginInput }}}
    {{{ passwordInput }}}

    <div class="{{ $style.buttons }}">{{{ submitButton }}}</div>
  </form>
`;
