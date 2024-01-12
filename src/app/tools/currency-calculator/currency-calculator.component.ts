import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.scss'],
})
export class CurrencyCalculatorComponent {
  currency_one: string = "USD";
  amount_one: number = 1;
  currency_two: string = "EUR";
  amount_two: number = 0;
  rate: number = 0;

  ngOnInit() {
    this.calculate();
  }

  calculate() {
    const currency_one = this.currencyEl_one.value !== "" ? this.currencyEl_one.value : 'USD';
    const currency_two = this.currencyEl_two.value !== "" ? this.currencyEl_two.value : 'EUR';

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then((res) => res.json())
      .then((data) => {
        const rate = data.rates[currency_two];

        this.rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        this.amount_two = this.amount_one * rate;
      });
  }

  onCurrencyOneChange() {
    this.calculate();
  }

  onAmountOneInput() {
    this.calculate();
  }

  onCurrencyTwoChange() {
    this.calculate();
  }

  onAmountTwoInput() {
    this.calculate();
  }

  onSwapClick() {
    const temp = this.currency_one;
    this.currency_one = this.currency_two;
    this.currency_two = temp;
    this.calculate();
  }

  get currencyEl_one(): HTMLSelectElement {
    return document.getElementById('currency-one') as HTMLSelectElement;
  }

  get amountEl_one(): HTMLInputElement {
    return document.getElementById('amount-one') as HTMLInputElement;
  }

  get currencyEl_two(): HTMLSelectElement {
    return document.getElementById('currency-two') as HTMLSelectElement;
  }

  get amountEl_two(): HTMLInputElement {
    return document.getElementById('amount-two') as HTMLInputElement;
  }

  get rateEl(): HTMLElement {
    return document.getElementById('rate');
  }

  get swap(): HTMLElement {
    return document.getElementById('swap');
  }
}
