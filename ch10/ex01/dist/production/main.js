((e, t) => {
  const n = (e, t) => e + t,
    a = (e) => e * e;
  (t.mean = (e) => e.reduce(n) / e.length),
    (t.stddev = function (e) {
      let r = t.mean(e);
      return Math.sqrt(
        e
          .map((e) => e - r)
          .map(a)
          .reduce(n) /
          (e.length - 1),
      );
    });
})(0, {});
