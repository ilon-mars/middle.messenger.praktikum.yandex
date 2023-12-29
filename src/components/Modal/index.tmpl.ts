export const tmpl = `
  <div class="{{ $style.modal }}" data-layout="flex" id="{{ modalId }}">
    <form class="{{ $style.form }}" name="{{ formName }}">
      <h3 class="h3 {{ $style.title }}">{{ title }}</h3>
      {{{ input }}}

      <footer class="{{ $style.controls }}">
        {{{ button }}}
      </footer>
    </form>
  </div>
`;
