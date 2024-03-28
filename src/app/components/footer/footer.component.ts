import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  sentence: string = "אני מאשר קבלת עידכונים ותכנים של “שלום בבית”";
  checked: boolean = false;

  toggleChecked() {
    this.checked = !this.checked;
  }
}