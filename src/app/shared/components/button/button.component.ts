import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'primary' | 'sky' | 'gray' | 'purple' = 'success';
  @Input() textColor: 'success' | 'primary' | 'sky' | 'gray' | 'white' = 'white';
  @Input() buttonSize: 'regular' | 'sm' = 'regular';

  constructor() { }

  ngOnInit(): void {    
  }

  get className() {
    return {
      'bg-success-600': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-600': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-sky-600': this.color === 'sky',
      'hover:bg-sky-800': this.color === 'sky',
      'focus:ring-sky-300': this.color === 'sky',
      'bg-gray-100': this.color === 'gray',
      'hover:bg-gray-200': this.color === 'gray',
      'focus:ring-gray-300': this.color === 'gray',
      'bg-purple-200': this.color === 'purple',
      'hover:bg-purple-300': this.color === 'purple',
      'focus:ring-purple-300': this.color === 'purple',
      'text-white': this.textColor === 'white',
      'text-gray-500': this.textColor === 'gray',
      'py-2 px-4': this.buttonSize === 'regular',
      'py-1 px-2': this.buttonSize === 'sm',
    }
  }

}
