import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PaymentsService} from "../../services/payments.service";

export interface Payment {
  name: string;
  code: string;
  amount: number;
  grid: string[][];
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {

  form = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentsService
  ) {
    this.form = this.fb.group({
      name: null,
      amount: null
    });
  }

  get payments(): Payment[] {
    return this.paymentService.payments;
  }

  addPayment(): void {
    this.paymentService.addPayment(this.form.value.name, this.form.value.amount);
  }

}
