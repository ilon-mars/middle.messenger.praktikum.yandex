export const loginTmpl = `
  <h2 class="h2 {{ $style.title }}">{{ title }}</h2>
  <form class="{{ $style.content }}" action="#">
    {{{ loginInput }}}
    {{{ passwordInput }}}
    <div class="{{ $style.buttons }}">{{{ submitButton }}}</div>
  </form>
  <footer class="{{ $style.controls }}">
    {{{ link }}}
  </footer>
`;

export const registerTmpl = `
  <h2 class="h2 {{ $style.title }}">{{ title }}</h2>

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

  <footer class="{{ $style.controls }}">
    {{{ link }}}
  </footer>
`;
