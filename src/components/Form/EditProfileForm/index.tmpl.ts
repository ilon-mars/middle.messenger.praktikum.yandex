export const tmpl = `
  <form class="{{ $style.form }}">
    <div class="{{ $style.avatarWrapper }}">
      {{{ avatar }}}
    </div>

    <input type="file" name="avatar" class="{{ $style.fileInput }}" />

    <div class="{{ $style.inputs }}">
      {{{ loginInput }}}
      {{{ displayNameInput }}}
      {{{ nameInput }}}
      {{{ secondNameInput }}}
      {{{ emailInput }}}
      {{{ phoneInput }}}
    </div>

    <div class="{{ $style.controls }}">
      {{{ saveButton }}}
    </div>
  </form>
`;
