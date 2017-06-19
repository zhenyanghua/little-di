module.exports = class Car {

  constructor(engine) {
    this._engine = engine;
    this._model = null;
    this._vin = Math.random().toString(36).substr(2, 8);;
  }

  get vin() {
    return this._vin;
  }

  get model() {
    return this._model;
  }

  set model(value) {
    this._model = value;
  }

  run() {
    return `Car runs on the engine - ${this._engine.id} and model - ${this._model}`;
  }

};