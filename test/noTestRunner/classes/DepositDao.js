module.exports = class DepositDao {

  constructor() {
    console.log("This creates an instance of the DepositDao class.");
  }

  createDeposit(deposit) {
    console.log(`This creates a deposit of $${deposit} in the repository.`)
  }

};
