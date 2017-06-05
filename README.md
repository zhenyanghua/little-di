# Little DI

A very simple implementation of dependency injection concept for both frontend and backend in **ES6**.

## Usage
```javascript
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

container.getClass('Engine');
```

## API
### Container class
|Constructor|Description|
|-----------|-----------|
|**Container(config:`ClassesConfig`)**|Creates an container for all registered classes instances management. One application should only have one container.|

|Methods|Description|
|-------|-----------|
|**getClass()**|Return Value: `Class<T>` - Fetches the scoped instance of the class.|

### ClassesConfig object specification
|Properties|Description|
|-------|-----------|
|**clazz**|Type: `Class<T>` - The instances of which to be managed.|
|**dependencies**|Type: `[Class<T>, <...>]` - An array of dependent classes.|
|**scope**|Type: `string` - the scope of the class instance. Available scopes are: `SCOPE_SINGLETON` and `SCOPE_PROTOTYPE`. Defaults to `SCOPE_SINGLETON`.|