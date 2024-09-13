import { Component } from '@angular/core';

@Component({
  selector: 'app-adhere-to-lint',
  standalone: true,
  imports: [],
  templateUrl: './adhere-to-lint.component.html',
  styleUrl: './adhere-to-lint.component.css'
})
export class AdhereToLintComponent {
  title = 'this component adhere to the ESLint rules';

  constructor() {
    this.logTitle();
  }

  logTitle(): void {
    console.log(this.title);
  }
}
