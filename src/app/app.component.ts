import { Component } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password:string = '';
  length:number = 0;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;

  modifyLength(value:string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue))
    {
      debugger;
      this.length = parsedValue;
    }
  }

  modifyLetters(){
    this.includeLetters = !this.includeLetters;
  }
  modifyNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  modifySymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
  buttonClick(){
    
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnoprstqvwyz';
    const symbols = '()!+-*/?][{}&%';

    let validChars = '';

    if(this.includeLetters)
    {
      validChars += letters;
    }

    if(this.includeNumbers)
    {
      validChars += numbers;
    }

    if(this.includeSymbols)
    {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0 ; i < this.length ; i++)
    {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;

  }
}
