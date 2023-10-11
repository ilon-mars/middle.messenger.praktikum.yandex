export const loginTmpl = `
  <h2 class="h2 {{ $style.title }}" id="title">{{ title }}</h2>

  {{{form}}}

  <footer class="{{ $style.controls }}">
    {{{ link }}}
  </footer>
`;

export const registerTmpl = `
  <h2 class="h2 {{ $style.title }}">{{ title }}</h2>

  {{{form}}}

  <footer class="{{ $style.controls }}">
    {{{ link }}}
  </footer>
`;
