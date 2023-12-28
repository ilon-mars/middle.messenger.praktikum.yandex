export const tmpl = `
  <div class="{{ $style.modal }}" data-layout="flex" id="add-chat-modal">
    <form class="{{ $style.form }}" name="add-chat-form">
      <h3 class="h3 {{ $style.title }}">{{ title }}</h3>
      {{{ input }}}

      <footer class="{{ $style.controls }}">
        {{{ button }}}
      </footer>
    </form>
  </div>
`;
