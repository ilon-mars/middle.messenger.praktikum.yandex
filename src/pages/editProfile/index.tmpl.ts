export const tmpl = `
  <section class="{{ $style.container }}">
    <a href="{{ to }}" class="{{ $style.goBack }}">&#8612;</a>

    <form class="{{ $style.content }}" action="#">
      <div class="{{ $style.avatarWrapper }}">
        {{{ avatar }}}
      </div>
      <input type="file" name="avatar" class="{{ $style.fileInput }}" />

      <div class="{{ $style.inputs }}">
        {{{ inputs }}}
      </div>

      <div class="{{ $style.controls }}">
        {{{ saveButton }}}
      </div>
    </form>
  </section>
`;
