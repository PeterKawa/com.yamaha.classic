'use strict';

const { Driver } = require('homey');
const { RFDriver } = require('homey-rfdriver');
const MySignal = require('./IRsignalReceiver.js');

class IRdriverReceiver extends RFDriver {
  static SIGNAL = MySignal;
}

class IRdriverReceiver extends Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('IRdriverReceiver has been initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device
   * and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    return [
      // Example device data, note that `store` is optional
      // {
      //   name: 'My Device',
      //   data: {
      //     id: 'my-device',
      //   },
      //   store: {
      //     address: '127.0.0.1',
      //   },
      // },
    ];
  }

}

module.exports = IRdriverReceiver;
