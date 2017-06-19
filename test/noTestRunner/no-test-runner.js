const {Container, SCOPE_PROTOTYPE} = require('../../lib/LittleDi');

const CustomerRegistrationDetails = require('./classes/CustomerRegistrationDetails');

const CustomerRegistrationDao = require('./classes/CustomerRegistrationDao');
const DepositDao = require('./classes/DepositDao');

const CustomerRegistrationService = require('./classes/CustomerRegistrationService');
const DepositService = require('./classes/DepositService');

const classesConfig = [
  {
    clazz: CustomerRegistrationDetails,
    scope: SCOPE_PROTOTYPE
  },
  {
    clazz: CustomerRegistrationDao,
  },
  {
    clazz: CustomerRegistrationService,
    dependencies: [CustomerRegistrationDao, CustomerRegistrationDetails],
    scope: SCOPE_PROTOTYPE
  },
  {
    clazz: DepositDao,
  },
  {
    clazz: DepositService,
    dependencies: [DepositDao]
  },

];
const container = new Container(classesConfig);

const customerRegistrationService_1 = container.getClass("CustomerRegistrationService");
customerRegistrationService_1.setAccountNumber(1);
customerRegistrationService_1.register();

const customerRegistrationService_2 = container.getClass("CustomerRegistrationService");
customerRegistrationService_2.setAccountNumber(2);
customerRegistrationService_2.register();

const depositService_1 = container.getClass("DepositService");
depositService_1.createDeposit(100);

const depositService_2 = container.getClass("DepositService");
depositService_2.createDeposit(60);
