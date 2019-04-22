import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RichCommunicatorService } from 'src/app/Services/rich-communicator.service';

@Component({
  selector: 'app-write-rich',
  templateUrl: './write-rich.component.html',
  styleUrls: ['./write-rich.component.css']
})
export class WriteRichComponent implements OnInit {

  content: any;
  public editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],               // custom button values
      [{ list: 'ordered'}, { list: 'bullet' }],
      [{ script: 'sub'}, { script: 'super' }],      // superscript/subscript
      [{ indent: '-1'}, { indent: '+1' }],          // outdent/indent
      [{ direction: 'rtl' }],                         // text direction
      [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],          // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],                                         // remove formatting button
      ['link', 'image', 'video']                         // link and image, video
    ],
      imageResize: true,
    };
  constructor(private sanitizer: DomSanitizer, private richService: RichCommunicatorService) { }

  ngOnInit() {
  }

  update() {
    this.richService.content.next(this.content);
    console.log('updated')
  }

  public output(event) {
    /*       this.quillHTML = this.sanitizer.bypassSecurityTrustHtml(event.html);
          
            // editor: editorInstance, // Quill
            // html: html, // html string
            // text: text, // plain text string
            // content: content, // Content - operatins representation
            // delta: delta, // Delta
            // oldDelta: oldDelta, // Delta
            // source: source // ('user', 'api', 'silent' , undefined)
           */
        }

  

}
