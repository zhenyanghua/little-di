module.exports = class DepositService {

  constructor(depositeDao) {
    this._depositeDao = depositeDao;
    console.log("This creates an instance of the DepositService class.");
  }

  createDeposit(deposit) {
    this._depositeDao.createDeposit(deposit);
  }

};
