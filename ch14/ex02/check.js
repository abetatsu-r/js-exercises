export class MyArrayLike {
  constructor(arrayLength) {
    this.length = arrayLength;
  }
}

export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  static get [Symbol.species]() {
    return MyArrayLike;
  }
}

const data = new MyArray([1, 2]);
const func = (x) => x * x;

function loggingProxy(o, objname) {
  const handlers = {
    get(target, property, receiver) {
      console.log(`Handler get({${objname}, ${property.toString()}})`);

      let value = Reflect.get(target, property, receiver);

      if (
        Reflect.ownKeys(target).includes(property) &&
        (typeof value === "object" || typeof value === "function")
      ) {
        return loggingProxy(value, `${objname}.${property.toString()}`);
      }

      return value;
    },

    set(target, prop, value, receiver) {
      console.log(`Handler set({${objname}, ${prop.toString()}}, ${value})`);
      return Reflect.set(target, prop, value, receiver);
    },

    apply(target, receiver, args) {
      console.log(`Handler ${objname}(${args})`);
      return Reflect.apply(target, receiver, args);
    },
  };

  Reflect.ownKeys(Reflect).forEach((handlerName) => {
    if (!(handlerName in handlers)) {
      handlers[handlerName] = function (target, ...args) {
        console.log(`Handler ${handlerName}(${objname}, ${args})`);

        return Reflect[handlerName](target, ...args);
      };
    }
  });

  return new Proxy(o, handlers);
}

let proxyData = loggingProxy(data, "data");
let proxyFunc = loggingProxy(func, "func");

console.log(typeof MyArray.map);

//proxyData.map(func);

console.log("-------------");
//data.map(proxyFunc);

console.log("-------------");

data.proxyMap(proxyFunc);
