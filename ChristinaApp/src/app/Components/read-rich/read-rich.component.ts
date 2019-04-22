import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RichCommunicatorService } from 'src/app/Services/rich-communicator.service';


@Component({
  selector: 'app-read-rich',
  templateUrl: './read-rich.component.html',
  styleUrls: ['./read-rich.component.css']
})
export class ReadRichComponent implements OnInit {
  showContent: any;
  public showModules = {
    toolbar: false,
  };
  constructor(
    private sanitizer: DomSanitizer,
    private richService: RichCommunicatorService) {
      this.richService.content.subscribe(res => {
        if (res ) {
          this.showContent = res;
        }
      });
  }

  ngOnInit() {
  }


}
