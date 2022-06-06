class SalaryApp {
  taxBracketFedral = {};

  taxBracketNY = {};

  taxBracketNJ = {};

  constructor(base, bonus, state) {
    this.base = base;
    this.bonus = bonus;
    this.state = state;
  }

  _calculateFederalTax = () => {};

  _calculateNYTax = () => {};

  _calculateNJTax = () => {};

  _calculateBonusTax = () => {};

  calculateInHand = () => {
    let stateTax = 0;
    if (this.state === "NJ") {
      stateTax = this._calculateNJTax();
    } else {
      stateTax = this._calculateNYTax();
    }

    let bonusTax = this._calculateBonusTax(this.bonus);

    let payableTax = this._calculateFederalTax() + stateTax + bonusTax;

    return this.base + this.bonus - payableTax;
  };
}

let salaryCalculator = new SalaryApp();

console.log(salaryCalculator.calculateInHand());
