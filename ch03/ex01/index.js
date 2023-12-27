const inf = Infinity;
const nan = NaN;

inf + inf; // Infinity
inf - inf; // NaN
inf * inf; // Infinity
inf / inf; // NaN

nan + nan; // NaN
nan - nan; // NaN
nan * nan; // NaN
nan / nan; // NaN

inf + nan; // NaN
inf - nan; // NaN
nan - inf; // NaN
inf * nan; // NaN
inf / nan; // NaN
nan / inf; // NaN
