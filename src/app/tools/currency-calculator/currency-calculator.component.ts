import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.scss']
})
export class CurrencyCalculatorComponent {
  currency_one: string = '';
  amount_one: number = 1;
  currency_two: string = '';
  amount_two: number = 0;
  rate: number = 0;

  ngOnInit() {
    this.calculate(); // Initial calculation

    // Event listeners
    this.currencyEl_one.addEventListener('change', () => this.calculate());
    this.amountEl_one.addEventListener('input', () => this.calculate());
    this.currencyEl_two.addEventListener('change', () => this.calculate());
    this.amountEl_two.addEventListener('input', () => this.calculate());

    this.swap.addEventListener('click', () => {
      const temp = this.currency_one;
      this.currency_one = this.currency_two;
      this.currency_two = temp;
      this.calculate();
    });
  }

  calculate() {
    this.currency_one = this.currencyEl_one.value;
    this.currency_two = this.currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${this.currency_one}`)
      .then(res => res.json())
      .then(data => {
        this.rate = data.rates[this.currency_two];

        this.rateEl.innerText = `1 ${this.currency_one} = ${this.rate} ${this.currency_two}`;
        this.amount_two = this.amount_one * this.rate;
      });
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