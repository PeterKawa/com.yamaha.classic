'use strict';

const { Device } = require('homey');
const { RFDevice } = require('homey-rfdriver');
class avReceiver extends RFDevice {
    static CAPABILITIES = {
    onoff: {
      'true': 'POWER_ON',
      'false': 'POWER_OFF',
    },
    volume_up: 'VOLUME_UP',
    volume_down: 'VOLUME_DOWN',
    volume_set: 'VOLUME_SET'

class avReceiver extends Device {

  /**
   * onInit is called when the device is initialized.
   */
  async onInit() {
    this.log('avReceiver has been initialized');
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('avReceiver has been added');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   */
  async onSettings({ oldSettings, newSettings, changedKeys }) {
    this.log('avReceiver settings where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name) {
    this.log('avReceiver was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('avReceiver has been deleted');
  }

}

module.exports = MyDevice;
