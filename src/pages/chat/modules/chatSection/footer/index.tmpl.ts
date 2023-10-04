export const tmpl = `
  <footer class="{{ $style.footer }}">
    <button class="{{ $style.attachButton }}">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0033 41.914L46.6788 18.2386L49.625 21.1848L25.9496 44.8603L23.0033 41.914Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8597 49.7704L54.5352 26.095L57.4815 29.0413L33.806 52.7167L30.8597 49.7704Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M47.5555 66.4662L71.2309 42.7907L74.1772 45.737L50.5017 69.4124L47.5555 66.4662Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.4119 74.3226L79.0873 50.6472L82.0336 53.5934L58.3582 77.2689L55.4119 74.3226Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.4119 74.3226C47.2397 82.4948 34.0195 82.5247 25.8836 74.3887C17.7477 66.2528 17.7773 53.0325 25.9496 44.8603L23.0033 41.914C13.1966 51.7207 13.1611 67.5851 22.9242 77.3482C32.6873 87.1113 48.5515 87.0756 58.3582 77.2689L55.4119 74.3226Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.2309 42.7907L74.1772 45.737C81.8046 38.1096 81.8321 25.7705 74.2386 18.177C66.6451 10.5835 54.3062 10.6111 46.6788 18.2386L49.625 21.1848C55.618 15.1919 65.3128 15.1701 71.2791 21.1364C77.2455 27.1028 77.2239 36.7977 71.2309 42.7907Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8597 49.7704C25.4116 55.2186 25.3927 64.0333 30.8167 69.4572C36.2406 74.8812 45.0536 74.8606 50.5017 69.4124L47.5555 66.4662C43.7418 70.2799 37.5729 70.2945 33.7761 66.4978C29.9793 62.701 29.9923 56.5304 33.806 52.7167L30.8597 49.7704Z" />
      </svg>
    </button>

    <form name="message" action="#" class="{{ $style.messageForm }}">
      <input type="text" name="message" class="{{ $style.messageInput }}" placeholder="Сообщение"/>
      <button class="{{$style.sendButton}}"></button>
    </form>
  </footer>
`;
