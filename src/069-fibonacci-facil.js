const fib = n => {
  if (n === 1) {
    return [0, 1];
  } else {
    const s = fib(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

const index = Number(lines.shift());

const sequence = fib(index).join(" ");

console.log(sequence);
