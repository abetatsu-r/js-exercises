import { loggingCallStackProxy } from "./index.js";

const testObj = {
  method1() {
    return 42;
  },
  method2(str1, str2) {
    return "test" + str1 + str2;
  },
};

test("success log(method with no args)", () => {
  const { proxy, logger } = loggingCallStackProxy(testObj);
  expect(proxy.method1()).toBe(42);

  expect(logger[0].date).not.toBe(undefined);
  expect(logger[0].method).toBe("method1");
  expect(logger[0].args).toEqual([]);
});

test("success log(method with args)", () => {
  const { proxy, logger } = loggingCallStackProxy(testObj);
  expect(proxy.method2("da", "ta")).toBe("testdata");

  expect(logger[0].date).not.toBe(undefined);
  expect(logger[0].method).toBe("method2");
  expect(logger[0].args).toEqual(["da", "ta"]);
});

test("success log in case pf calling some methods", () => {
  const { proxy, logger } = loggingCallStackProxy(testObj);
  expect(proxy.method1()).toBe(42);
  expect(proxy.method2("da", "ta")).toBe("testdata");

  expect(logger.length).toBe(2);

  expect(logger[0].date).not.toBe(undefined);
  expect(logger[0].method).toBe("method1");
  expect(logger[0].args).toEqual([]);

  expect(logger[1].date).not.toBe(undefined);
  expect(logger[1].method).toBe("method2");
  expect(logger[1].args).toEqual(["da", "ta"]);
});
