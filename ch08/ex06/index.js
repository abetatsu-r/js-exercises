const m = function (...arg) {
  console.log(arg[1]);
};
m("a", "b"); // "b"

const m_arrow = (...arg) => {
  console.log(arg[1]);
};

m_arrow("a", "b"); // "b"
