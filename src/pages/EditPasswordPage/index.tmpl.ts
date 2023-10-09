export const tmpl = `
  <section class="{{ $style.container }}">
    {{{goBack}}}

    <form class="{{ $style.content }}" action="#">
      <div class="{{ $style.inputs }}">
        {{{ inputs }}}
      </div>

      <div class="{{ $style.controls }}">
        {{{ saveButton }}}
      </div>
    </form>
  </section>
`;
