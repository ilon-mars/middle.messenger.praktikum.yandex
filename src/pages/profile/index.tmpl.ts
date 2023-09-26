export const tmpl = `
  <section class="{{ $style.container }}">
    <a href="{{ to }}" class="{{ $style.goBack }}">&#8612;</a>

    <div class="{{ $style.content }}">
      <div class="{{ $style.avatar }}">
        <div class="{{ $style.imageWrapper }}">
          <img class="{{ $style.image }}">
        </div>
        <span class="h3">{{ name }}</span>
        <span class="{{ $style.overlay }}">Поменять аватар</span>
      </div>

      <div class="{{ $style.controls }}">
        <button class="{{ $style.button }}">Изменить данные</button>
        <button class="{{ $style.button }}">Изменить пароль</button>
        <button class="{{ $style.logout }}">Выйти</button>
      </div>

      <ul class="{{ $style.cards }}">
        {{#each cards}}
          <li class="{{ ../$style.card }}">
            <span class="text {{ ../$style.caption }}">{{ caption }}</span>
            <span class="h3">{{ text }}</span>
          </li>
        {{/each}}
      </ul>
    </div>
  </section>
`;
