# audio out [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] ![Dependencies][david]
> Output an Audio object to the speaker.

Output an [`Audio`][audio] object to the [speaker][speaker].
```js
var Audio = require('audio');
var out = require('audio-out');

// Create audio.
var foo = new Audio(Buffer.allocUnsafe(800 * 4), {
  depth: 16,
  rate: 800
});

// Output audio to speakers.
out(foo, true);
```

## Installation
```shell
$ npm install --save audio-out
```

## API
### `out(audio)`
Output a given audio to the speaker.
 - `audio` ([`Audio`][audio]): Audio to output to the speaker.

Returns a [`Speaker`][speaker] instance.

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

## License
[MIT](LICENSE) &copy; Jamen Marzonie

[avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
[github]: https://github.com/jamen
[npm-image]: https://badge.fury.io/js/audio-decode-wav.svg
[npm-url]: https://npmjs.org/package/audio-decode-wav
[travis-image]: https://travis-ci.org/audiojs/decode-wav.svg?branch=master
[travis-url]: https://travis-ci.org/audiojs/decode-wav
[audio]: https://github.com/audiojs/audio
[david]: https://david-dm.org/audiojs/decode-wav.svg
[speaker]: https://github.com/TooTallNate/node-speaker
