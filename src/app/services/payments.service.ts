import { Injectable } from '@angular/core';
import {GeneratorService} from "./generator.service";
import {Payment} from "../components/payments/payments.component";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  payments: Payment[] = [];

  constructor(private generatorService: GeneratorService) { }

  addPayment(name: string, amount: number): void {
    this.payments.push({
      name,
      amount,
      code: this.generatorService.code,
      grid: this.generatorService.grid
    });
  }
}
