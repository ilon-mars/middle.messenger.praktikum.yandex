export const tmpl = `
  {{{ goBack }}}

  <div class="{{ $style.content }}">
    <div class="{{ $style.avatarWrapper }}">
      {{{ avatar }}}
    </div>

    <div class="{{ $style.controls }}">
      <a href="{{ editProfile }}" class="{{ $style.button }}">Изменить данные</a>
      <a href="{{ editPassword }}" class="{{ $style.button }}">Изменить пароль</a>
      <a href="{{ logout }}" class="{{ $style.logout }}">Выйти</a>
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
`;
