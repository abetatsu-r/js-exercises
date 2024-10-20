var x = "unused";

export function factorical(x) {
  if (x == 1) {
    return 1;
  } else {
    return x * factorical(x - 1);
  }
}
