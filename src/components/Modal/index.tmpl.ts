export const tmpl = `
  <h2 class="h2 {{ $style.title }}">{{ title }}</h2>

  {{{form}}}

  <footer class="{{ $style.controls }}">
    {{{ link }}}
  </footer>
`;
