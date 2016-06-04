var Speaker = require('speaker');

module.exports = function out(audio) {
  var output = new Speaker({
    channels: 1,
    bitDepth: audio.depth,
    sampleRate: audio.rate
  });
  output.write(audio.sample);
  return output;
};
