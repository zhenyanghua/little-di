import {SCOPE_PROTOTYPE} from './Constants';
import {Clazz} from './Clazz';

export class Container {

  constructor(classesConfig) {
    this._classes = new Map();
    this._classInstances = new Map();

    classesConfig.forEach(classConfig => {
      this._classes.set(classConfig.clazz.name,
        new Clazz(classConfig.clazz, classConfig.dependencies, classConfig.scope));
      this._classInstances.set(classConfig.clazz.name, null);
    });
  }

  getClass(name) {
    if (!this._classes.get(name))
      return undefined;

    if (this._classes.get(name).scope === SCOPE_PROTOTYPE)
      return this._createInstance(name);

    if (this._classInstances.get(name) === null) {
      const newClass = this._createInstance(name);
      this._classInstances.set(name, newClass);
    }

    return this._classInstances.get(name);
  }

  _createInstance(name) {
    const clazz = this._classes.get(name);
    const dependencies = clazz.dependencies.map(x => this.getClass(x.name));

    return Reflect.construct(clazz.name, dependencies);
  }
}