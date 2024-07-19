/**
 * memo:
 * - p441のloggingProxyを参考にする
 * - objectのメソッド呼び出し時には、handlerのget ⇒ apply(再帰)の順で呼ばれて処理が実行される
 * - したがって、get(), apply()の部分を代行するproxyを実装し、処理の最中に配列にログを挿入するようにすればいい
 */
export function loggingCallStackProxy(o) {
  const logger = [];
  const proxy = loggingProxy(o, logger);

  return { proxy, logger };
}

function loggingProxy(o, logger) {
  const handlers = {
    get(target, property, receiver) {
      let value = Reflect.get(target, property, receiver);

      if (
        Reflect.ownKeys(target).includes(property) &&
        (typeof value === "object" || typeof value === "function")
      ) {
        return loggingProxy(value, logger);
      }

      return value;
    },

    // この部分はgetのproxy呼び出しの中にねじ込める
    apply(target, receiver, args) {
      recordLog(logger, target.name, args);
      return Reflect.apply(target, receiver, args);
    },
  };

  return new Proxy(o, handlers);
}

function recordLog(logger, method, args) {
  logger.push({
    date: new Date(),
    method,
    args,
  });
}
