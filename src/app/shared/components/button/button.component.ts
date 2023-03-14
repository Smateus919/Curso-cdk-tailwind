import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() colorBtn: 'success' | 'primary' = 'success';

  constructor() { }

  ngOnInit(): void {    
  }

  get colors() {
    return {
      'bg-success-600': this.colorBtn === 'success',
      'hover:bg-success-800': this.colorBtn === 'success',
      'focus:ring-success-300': this.colorBtn === 'success',
      'bg-primary-600': this.colorBtn === 'primary',
      'hover:bg-primary-800': this.colorBtn === 'primary',
      'focus:ring-primary-300': this.colorBtn === 'primary',
    }
  }

}
