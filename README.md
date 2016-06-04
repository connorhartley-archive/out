# audio out [![NPM version][npm-image]][npm-url] ![Dependencies][david]
> Output an Audio object to the speaker.

Output an [`Audio`][audio] object to the [speaker][speaker].
```js
var Audio = require('audio');
var out = require('audio-out');
var random = require('crypto').randomBytes;

// Create 5s random audio and output.
var foo = new Audio(random(800 * 5), {rate: 800});
out(foo);
```

## Installation
```sh
$ npm install --save audio-out
```

**Note**: [Speaker][speaker] may have [special installation][speaker-install] on Debian/Ubuntu.
```sh
$ sudo apt-get install libasound2-dev
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
[npm-image]: https://badge.fury.io/js/audio-out.svg
[npm-url]: https://npmjs.org/package/audio-out
[audio]: https://github.com/audiojs/audio
[david]: https://david-dm.org/audiojs/out.svg
[speaker]: https://github.com/TooTallNate/node-speaker
[speaker-install]: https://github.com/TooTallNate/node-speaker#installation
