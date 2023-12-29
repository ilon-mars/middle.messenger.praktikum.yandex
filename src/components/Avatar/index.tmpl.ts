export const tmpl = `
  <div class="{{ $style.avatar }}">
    <div class="{{ $style.wrapper }}">
      <picture class="{{ $style.imageWrapper }} {{#if isClickable}}{{$style.hoverable}}{{/if}}">
        <img class="{{ $style.image }}" src="{{ src }}">
      </picture>
    </div>

    <span class="h3 {{$style.name}}">{{ name }}</span>
  </div>
`;
