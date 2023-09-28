export const tmpl = `
  <form action="#" class="{{ $style.form }}">
    <fieldset class="{{ $style.fieldset }}">
      <legend class="h3 {{ $style.legend }}">Личные данные</legend>
      {{{ nameInput }}}
      {{{ secondNameInput }}}
      {{{ emailInput }}}
      {{{ phoneInput }}}
    </fieldset>
    <fieldset class="{{ $style.fieldset }}">
      <legend class="h3 {{ $style.legend }}">Данные профиля</legend>
      {{{ loginInput }}}
      {{{ passwordInput }}}
      {{{ repeatPasswordInput }}}
    </fieldset>

    <div class="{{ $style.buttons }}">
      {{{ submitButton }}}
    </div>
  </form>
`;
