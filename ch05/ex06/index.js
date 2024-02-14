function try_cathch_finally_process(isErr) {
  let process = "";

  try {
    process += "try => ";

    if (isErr) {
      throw new Error("go catch");
    }
  } catch {
    process += "catch => ";
  } finally {
    process += "finally";
  }

  return process;
}

console.log(try_cathch_finally_process(true)); // try => catch => finally
console.log(try_cathch_finally_process(false)); // try => finally
