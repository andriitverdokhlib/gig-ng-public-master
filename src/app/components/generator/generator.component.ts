import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {GeneratorService} from "../../services/generator.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {

  form = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private generatorService: GeneratorService
  ) {
    this.form = this.fb.group({
      char: null
    });

  }

  get grid(): string[][] {
    return this.generatorService.grid;
  }

  get code(): string {
    return this.generatorService.code;
  }

  generateCode(isClicked?: boolean): void {
    this.generatorService.getCode(this.form.value.char);

    if (isClicked) {
      this.form.disable();

      setTimeout(() => {
        this.form.enable()
      }, 4000);
    }
  }

}
