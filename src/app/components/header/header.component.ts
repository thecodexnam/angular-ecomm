import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-800 text-white px-4 py-3 font-bold flex justify-between items-center">
      <span>My Store</span>
      <app-primary-button label="Cart" (btnclicked)="ShowButtonClicked()"/>
     </div>
  `,
  styles: ` `
})
export class HeaderComponent {


  ShowButtonClicked() {
    alert('Cart button clicked from Header!');
  }
  
}
