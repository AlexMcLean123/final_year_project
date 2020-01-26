import { Component, OnInit } from '@angular/core';
import { TheSessionService } from '../service/the-session.service';
import abcjs from 'abcjs'
import { AbcFormatter } from '../AbcFormatter';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.page.html',
  styleUrls: ['./recordings.page.scss'],
})
export class RecordingsPage implements OnInit {
  abcFormatter: AbcFormatter;
  abc: any;
  constructor(private theSessionService: TheSessionService) {
    this.abcFormatter = new AbcFormatter();
   }
  tuneInformation: any;


  ngOnInit() {

    this.getTune(13);

    setTimeout(() => {
      const tune4 = this.constructAbc();
      abcjs.renderAbc("paper1", tune4);
    }, 1800)
    
  }

  ionViewDidEnter() {

  }


  getMeasure(type) {
    switch (type) {
        case "jig": return "6/8";
        case "slip jig": return "9/8";
        case "reel": case "hornpipe": case "barndance": case "strathspey": return "4/4";
        case "polka": return "2/4";
        case "slide": return "12/8";
        case "waltz": case "mazurka": return "3/4";
        case "three-two": return "3/2";
    }
}

  constructAbc(){
    let name = this.tuneInformation.name.replace(/[^a-zA-Z ]/g, "")

    this.abc = "X: 1\nT: " +
    name +"\nM: " 
    + this.getMeasure(this.tuneInformation.type) +"\nL: 1/8 \nK:"
    + this.tuneInformation.settings[0].key +"\n"
    + this.abcFormatter.format(this.tuneInformation.settings[0].abc)
    console.log(this.abc)
    return this.abc;
  }
    
  getTune(id) {
    this.theSessionService.GetIssue(id).subscribe(tune => {
      this.tuneInformation = tune;
      console.log(this.tuneInformation)
      console.log(this.tuneInformation.settings[0].abc)
      this.abc = this.abcFormatter.format(this.tuneInformation.settings[0].abc)
      console.log(this.abc)
      this.constructAbc();

    })
  }

}
