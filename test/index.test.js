const assert = require('assert');
const {Container} = require('../lib/LittleDi');
const Car = require('./classes/Car');
const Engine = require('./classes/Engine');
const Manufacture = require('./classes/Manufacture');

describe('Container', function() {
  const classesConfig = [
    {
      clazz: Engine,
      scope: 'prototype'
    },
    {
      clazz: Car,
      dependencies: [Engine],
      scope: 'prototype'
    },
    {
      clazz: Manufacture
    }
  ];
  const container = new Container(classesConfig);

  describe('#getClass()', function() {
    it('should return undefined if no class with such name is found.', function() {
      assert.equal(undefined, container.getClass('Hello'));
    });

    it ('should return a new instance when prototype scope is used.', function () {
      assert.notDeepEqual(container.getClass('Engine'), container.getClass('Engine'));
    });

    it ('should return the same instance when defualt singleton scope is used.', function() {
      assert.deepEqual(container.getClass('Manufacture'), container.getClass('Manufacture'));
    });

    it ('should return different instance values from their dependencies properties', function() {
      const car1 = container.getClass('Car');
      car1.model = '3';
      const car2 = container.getClass('Car');
      car2.model = '6';

      assert.notEqual(car1.run(), car2.run());
    })
  });
});