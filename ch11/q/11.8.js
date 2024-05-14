const a = { test: "1", test2: "2" };
const b = { test: "1", test2: "2" };
const c = { test: "1", test2: "2" };
const d = { test: "1", test2: "2" };

const l = [a, b, c, d];

console.table(l);

/**
┌─────────┬──────┬───────┐
│ (index) │ test │ test2 │
├─────────┼──────┼───────┤
│    0    │ '1'  │  '2'  │
│    1    │ '1'  │  '2'  │
│    2    │ '1'  │  '2'  │
│    3    │ '1'  │  '2'  │
└─────────┴──────┴───────┘
*/
