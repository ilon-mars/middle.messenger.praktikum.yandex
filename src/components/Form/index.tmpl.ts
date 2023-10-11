export const loginTmpl = `
  {{{ loginInput }}}
  {{{ passwordInput }}}
  <div class="{{ $style.buttons }}">{{{ submitButton }}}</div>
`;

export const registerTmpl = `
  <fieldset class="{{ $style.fieldset }}">
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
`;

export const searchTmpl = `{{{ searchInput }}}`;

export const messageTmpl = `
  {{{ messageInput }}}
  <button class="{{ $style.sendMessageButton }}">{{{icon}}}</button>
`;

export const editPasswordTmpl = `
  <div class="{{ $style.editPasswordInputs }}">
    {{{ oldPassword }}}
    {{{ newPassword }}}
    {{{ repeatPassword }}}
  </div>

  <div class="{{ $style.editPasswordControls }}">
    {{{ saveButton }}}
  </div>
`;

export const editProfileTmpl = `
  <div class="{{ $style.avatarWrapper }}">
    {{{ avatar }}}
  </div>
  <input type="file" name="avatar" class="{{ $style.fileInput }}" />

  <div class="{{ $style.editProfileInputs }}">
    {{{ loginInput }}}
    {{{ displayNameInput }}}
    {{{ nameInput }}}
    {{{ secondNameInput }}}
    {{{ emailInput }}}
    {{{ phoneInput }}}
  </div>

  <div class="{{ $style.editProfileControls }}">
    {{{ saveButton }}}
  </div>
`;
