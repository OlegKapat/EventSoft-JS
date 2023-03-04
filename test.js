var stackHolder = {
  count: 3,
  storage: [1, '{id: 1,value: "obj"}', "stringHolder", 46],
};

var push = (value) => stackHolder.storage.push(value);

var pop = () => {
  if (stackHolder.count === 0) {
    return [];
  }
  return stackHolder.storage.pop();
};

var peek = () => stackHolder.storage[stackHolder.storage.length - 1];

var swap = (value1) => {
  if (value1 > stackHolder.storage.length) {
    return stackHolder.storage;
  }
  var value2 = value1 + 1;
  let tempData = stackHolder.storage[value1];
  stackHolder.storage[value1] = stackHolder.storage[value2];
  stackHolder.storage[value2] = tempData;
  // or
  // [stackHolder.storage[value1], stackHolder.storage[value2]]=[stackHolder.storage[value2], stackHolder.storage[value1]]
};

export function stack(stackOperation, stackValue) {
  switch (stackOperation) {
    case "push":
      push(stackValue);
      break;
    case "pop":
      pop();
      break;
    case "swap":
      swap(stackValue);
      break;
    case "peek":
      peek();
      break;
    default:
      return stackHolder.storage;
  }
}
