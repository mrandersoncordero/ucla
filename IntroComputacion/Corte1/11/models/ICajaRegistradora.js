export default class ICajaRegistradora {
  readOneDollar() {
    return prompt('Cantidad billetes de $1: ')
  }

  readFiveDollar() {
    return prompt('Cantidad billetes de $5: ')
  }

  readTenDollar() {
    return prompt('Cantidad billetes de $10: ')
  }

  readTwentyDollar() {
    return prompt('Cantidad billetes de $20: ')
  }

  readFiftyDollar() {
    return prompt('Cantidad billetes de $50: ')
  }

  readOneHundredDollar() {
    return prompt('Cantidad billetes de $100: ')
  }

  salida(cantidad_de_billetes) {
    let texto = '';
    for (const iterator in cantidad_de_billetes) {
      let total_billete = cantidad_de_billetes[iterator].quantity * cantidad_de_billetes[iterator].value
      texto += `Billetes de $${cantidad_de_billetes[iterator].value}: ${cantidad_de_billetes[iterator].quantity} (Total: $${total_billete})\n`;
    }

    return texto;
  }
}