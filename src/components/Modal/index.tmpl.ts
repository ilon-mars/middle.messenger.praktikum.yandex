export const tmpl = `
  <div class="{{ $style.modal }}" open>
    <h2 class="h2 {{ $style.title }}">{{ title }}</h2>
    {{{form}}}


    <footer class="{{ $style.controls }}">
    {{{ link }}}

    {{#if notification}}
      <span class="{{ $style.notification }}">{{notification}}</span>
    {{/if}}
    </footer>
  </div>
`;
