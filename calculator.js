function calculator(op1, op2, operator) {
  op1 = parseInt(op1);
  op2 = parseInt(op2);

  let calc = {
    '+': op1 + op2,
    '-': op1 - op2,
    '*': op1 * op2,
    '/': op1 / op2,
  };
  return op2 == 0 && operator == '/' ? op1 : calc[operator];
}
