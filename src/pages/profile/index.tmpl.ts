export const tmpl = `
  <section class="{{ $style.container }}">
    <a href="{{ goBack }}" class="{{ $style.goBack }}">&#8612;</a>

    <div class="{{ $style.content }}">
      <div class="{{ $style.avatarWrapper }}">
        {{{ avatar }}}
      </div>

      <div class="{{ $style.controls }}">
        <button class="{{ $style.button }}">Изменить данные</button>
        <button class="{{ $style.button }}">Изменить пароль</button>
        <button class="{{ $style.logout }}">Выйти</button>
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
  </section>
`;
