export const tmpl = `
  <section class="{{$style.wrapper}} container">
    {{{ goBack }}}

    <div class="{{ $style.content }}">
      <div class="{{ $style.avatarWrapper }}">
        {{{ avatar }}}
      </div>

      <div class="{{ $style.controls }}">
        {{{editProfileLink}}}
        {{{editPasswordLink}}}
        {{{logout}}}
      </div>

      <ul class="{{ $style.cards }}">
        {{#each cards}}
          <li class="{{ ../$style.card }} profile-card">
            <span class="text {{ ../$style.caption }}">{{ caption }}</span>
            <span class="h3">{{ text }}</span>
          </li>
        {{/each}}
      </ul>
    </div>

    {{{ uploadAvatarModal }}}
  </section>
`;
