function factorial(n) {
  if (typeof n !== 'number') {
    return;
  }
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return  n * factorial(--n);
  }
};

/*function factorialn(n) {
  if (typeof n !== 'bigint') {
    return;
  } else {
    if (n === 0n || n === 1n) {
      return 1n;
    } else {
      return n * factorialn(--n);
    }
  }
}; */
