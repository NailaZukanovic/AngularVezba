import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  imageUrl: String = "https://etran.rs/drustvo/wp-content/uploads/2021/11/LOGO-ZLATO-1.png"
  minPrice: number = 3; //text field
  maxPrice: number = 5; //text field
  authors: any[] = ["autor1","autor2", "autor3"]; //dropdown lista'
  isActive: Boolean = true;
  ime: String = "";

  onSave($event:any) {
    console.log("Kliknuli ste na dugme " + $event);
  }
  onDivClick(){
    console.log("kliknuli ste na div");
  }

  onKeyUp(email:any)
  {
      console.log('Pritisnuli ste enter ' + email.value);
  }
}
