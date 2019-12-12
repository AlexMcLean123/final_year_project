import { Component, OnInit } from '@angular/core';
import { TheSessionService } from '../service/the-session.service';
import abcjs from 'abcjs'

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.page.html',
  styleUrls: ['./recordings.page.scss'],
})
export class RecordingsPage implements OnInit {

  constructor(private theSessionService: TheSessionService) { }
  hello = "name"
  public createSheet(name: string) {
    // const elementName: string = name;
    // // tslint:disable-next-line: max-line-length
    // const tune = 'X:1\nT: Cooley\'s\nM: 4/4\nL: 1/8\nR: reel\nK: Emin\nD2|:"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|\n"Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|1"Em"DEFD E2 D2:|2"Em"DEFD E2 gf||\n|:"Em"eB B2 efge|eB B2 gedB|"D"A2 FA DAFA|A2 FA defg|\n"Em"eB B2 eBgB|eB B2 defg|"D"afe^c dBAF|1"Em"DEFD E2 gf:|2"Em"DEFD E4|]\n';
    // const sheet = abcjs.renderAbc(elementName, tune, {});
    // console.log('Created a sheet for ' + name);
    // console.log(sheet)
    // return sheet;
    //abcjs.renderAbc("paper", "X:1\nK:D\nDDAA|BBA2|\n");

  }

  ngOnInit() {
    const tune = 'X:1\nT: Cooley\'s\nM: 4/4\nL: 1/8\nR: reel\nK: Emin\nD2|:"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|\n"Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|1"Em"DEFD E2 D2:|2"Em"DEFD E2 gf||\n|:"Em"eB B2 efge|eB B2 gedB|"D"A2 FA DAFA|A2 FA defg|\n"Em"eB B2 eBgB|eB B2 defg|"D"afe^c dBAF|1"Em"DEFD E2 gf:|2"Em"DEFD E4|]\n';
    //const sheet = this.createSheet(this.hello);
    const tune1 = 'X:1\nT: Cooley\'s\nM: 4/4\nL: 1/8\nR: reel\nK: Emin\nD2|:|EBBA B2 EB|B2 AB dBAG|FDAD BDAD|FDAD dAFD|! EBBA B2 EB|B2 AB defg|afec dBAF|DEFD E2:|! |:gf|eB B2 efge|eB  B2 gedB|A2 FA DAFA| A2 FA defg|! eB B2 eBgB|eB B2 defg|afec dBAF|DEFD E2:|';
    abcjs.renderAbc("paper", tune);
    abcjs.renderAbc("paper1", tune1);
    const tune2 = 'X:1\nT: Kesh\nM: 4/4\nL: 1/8\nR: reel\nK: Emin\nD2|: |:G3 GAB| A3 ABd|edd gdd|edB dBA|! GAG GAB|ABA ABd|edd gdd|BAF G3:|! B2B d2d|ege dBA|B2B dBG|ABA AGA|! BAB d^cd|ege dBd|gfg aga| bgg g3:|';
    abcjs.renderAbc("paper2", tune2);

    

  }

  ionViewDidEnter() {

  }

}
