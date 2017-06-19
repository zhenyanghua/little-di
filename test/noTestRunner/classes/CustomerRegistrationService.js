module.exports = class CustomerRegistrationService {

  constructor(customerRegistrationDao, customerRegistrationDetails) {
    this._customerRegistrationDao = customerRegistrationDao;
    this._customerRegistrationDetails = customerRegistrationDetails;
  }

  setAccountNumber(accountNumber) {
    this._customerRegistrationDetails.accountNumber = accountNumber;
  }

  register() {
    this._customerRegistrationDao
      .registerCustomer(this._customerRegistrationDetails);
  }

};
