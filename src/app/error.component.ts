import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<h1> ERROR!</h1>
    <p>
      Please enter student number.     
    </p>
     <a href='/student'>Get Students</a>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
