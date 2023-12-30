export const tmpl = `
  <div class="{{ $style.modal }}" data-layout="flex" id="avatar-modal">
    <form class="{{ $style.form }}" name="avatar-form">
      <h3 class="h3 {{ $style.title }}">{{ title }}</h3>
      {{{ input }}}

      <footer class="{{ $style.controls }}">
        {{{ button }}}

        {{#if notification}}
          <span class="{{ $style.notification }}">{{notification}}</span>
        {{/if}}
      </footer>
    </form>
  </div>
`;
