import {SCOPE_SINGLETON} from './Constants';

export class Clazz {

  constructor(name, dependencies = [], scope = SCOPE_SINGLETON) {
    this._name = name;
    this._dependencies =  dependencies;
    this._scope = scope;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get dependencies() {
    return this._dependencies;
  }

  set dependencies(value) {
    this._dependencies = value;
  }

  get scope() {
    return this._scope;
  }

  set scope(value) {
    this._scope = value;
  }
}