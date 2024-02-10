export let fib10_1 = function() {
    let terms = [1, 1];
    while (terms.length < 10) {
        terms.push(terms.at(-1) + terms.at(-2));
    }

    return terms;
}

export let fib10_2 = function() {
    let terms = [1, 1];
    do {
        terms.push(terms.at(-1) + terms.at(-2));

    }    while (terms.length < 10);

    return terms;
}

export let fib10_3 = function() {
    let terms = [1, 1];
    for(let i=2; i < 10; i++) {
        terms[i] = terms[i-1] + terms[i-2];
    }

    return terms;
}
