const cantidad_de_billetes = {
  oneDollar: {
    quantity: 10,
    value: 1 // $
  },
  fiveDollar: {
    quantity: 5,
    value: 5 // $
  },
  tenDollar: {
    quantity: 2,
    value: 10 // $
  },
  twentyDollar: {
    quantity: 1,
    value: 20 // $
  },
  fiftyDollar: {
    quantity: 0,
    value: 50 // $
  },
  oneHundredDollar: {
    quantity: 3,
    value: 100 // $
  },
}

for (const iterator in cantidad_de_billetes) {
  let total_billete = cantidad_de_billetes[iterator].quantity * cantidad_de_billetes[iterator].value
  console.log(`Billetes de $${cantidad_de_billetes[iterator].value}: ${cantidad_de_billetes[iterator].quantity} (Total: $${total_billete})`);
}