const { IRsignalReceiver } = require('homey-rfdriver');

class IRsignalReceiver extends RFSignal {
  static FREQUENCY = 'ir';
  static ID = 'yamaha_signal';
}

module.exports = IRsignalReceiver;
