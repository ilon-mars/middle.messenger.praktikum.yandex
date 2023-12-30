export const tmpl = `
  <div class="{{ $style.container }}">
    {{{ header }}}

    <section class="{{ $style.chat }}">
      {{{ messages }}}
    </section>

    {{{ footer }}}
  </div>
`;
