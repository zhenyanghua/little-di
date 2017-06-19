module.exports = class CustomerRegistrationDetails {

  constructor() {
    this._accountNumber = null;
    console.log("This creates an instance of the CustomerRgistrationDetails class.");
  }

  get accountNumber() {
    return this._accountNumber;
  }

  set accountNumber(value) {
    this._accountNumber = value;
  }
};
