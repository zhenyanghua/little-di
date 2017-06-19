module.exports = class CustomerRegistrationDao {

  constructor() {
    console.log("This creates an instance of the CustomerRegistrationDao class.");
  }

  registerCustomer(customerRegistrationDetails) {
    console.log(`This register the customer with account number ${customerRegistrationDetails.accountNumber}`);
  }

};
