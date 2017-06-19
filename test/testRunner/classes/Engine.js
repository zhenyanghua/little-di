module.exports = class Engine {

  constructor() {
    this._model = null;
    this._year = null;
    this._id = Math.random().toString(36).substr(2, 8);
  }

  get id() {
    return this._id;
  }

  get model() {
    return this._model;
  }

  set model(value) {
    this._model = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
  }
};