export const tmpl = `
  <section class="{{ $style.wrapper }}">
    {{{goBack}}}

    {{{form}}}

    {{#if notification}}
      <span class="{{ $style.notification }}">{{notification}}</span>
    {{/if}}
  </section>
`;
