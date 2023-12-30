export const tmpl = `
  <form class="{{ $style.form }}">
    <fieldset class="{{ $style.fieldset }} {{ $style.active }}">
      <legend class="h3 {{ $style.legend }}">
        {{{ personalButton }}}
      </legend>
      {{{ nameInput }}}
      {{{ secondNameInput }}}
      {{{ emailInput }}}
      {{{ phoneInput }}}
    </fieldset>

    <fieldset class="{{ $style.fieldset }}">
      <legend class="h3 {{ $style.legend }}">
      {{{ accountButton }}}
      </legend>
      {{{ loginInput }}}
      {{{ passwordInput }}}
      {{{ repeatPasswordInput }}}
    </fieldset>

    <div class="{{ $style.buttons }}">
      {{{ submitButton }}}
    </div>
  </form>
`;
