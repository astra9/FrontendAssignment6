import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private message: string = "";
  private textColor: string = "";

  get getMessage(): string{
    return this.message;
  }

  get getColor(): string{
    return this.textColor;
  }

  checkIfTooMuch(items: string){
    let itemsList: string[] = items.split(",");
    let filteredItems: string[] = itemsList.filter(item => item.trim()!=="");
    if(filteredItems.length>3){
      this.message="Too much!";
      this.textColor="green";
    } else if(filteredItems.length===0){
      this.message="Please enter data first"
      this.textColor="red";
    } else {
      this.message = "Enjoy!";
      this.textColor="green";
    }
  }
}
