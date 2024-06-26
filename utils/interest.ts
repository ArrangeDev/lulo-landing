export function luloInterest(deposit: number) {
  const annualRate = 0.1; // 10% annual interest rate
  const monthlyRate = annualRate / 12; // Monthly interest rate
  const months = 12; // Number of compounding periods in a year

  // Calculate the final amount using compound interest formula
  const finalAmount = deposit * Math.pow(1 + monthlyRate, months);

  // Compound interest is the final amount minus the initial deposit

  const roundedTotalAmount = parseFloat(finalAmount.toFixed(1));

  let amounts: number[] = [deposit];

  for (let month = 1; month <= months; month++) {
    const finalAmount = deposit * Math.pow(1 + monthlyRate, month);
    const roundedTotalAmount = parseFloat(finalAmount.toFixed(1));
    amounts.push(roundedTotalAmount);
  }

  const lulojson = {
    roundedTotalAmount,
    amounts,
  };

  return lulojson;
}

export function bankInterest(deposit: number) {
  const rate = 0.0045;
  const time = 1;
  const months = 12;

  const interest = deposit * rate * time;

  const totalAmount = deposit + interest;

  const roundedTotalAmount = parseFloat(totalAmount.toFixed(1));

  let amounts: number[] = [deposit];

  for (let month = 1; month <= months; month++) {
    const time = month / 12;
    const interest = deposit * rate * time;
    const totalAmount = deposit + interest;
    const roundedTotalAmount = parseFloat(totalAmount.toFixed(1));
    amounts.push(roundedTotalAmount);
  }

  const bankjson = {
    roundedTotalAmount,
    amounts,
  };

  return bankjson;
}
