export const tmpl = `
  <section class="{{ $style.container }}">
    {{{ goBack }}}

    <form class="{{ $style.content }}" action="#">
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
  </section>
`;
