import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheSessionService } from '../service/the-session.service';
import { Tune } from '../model/Tune';
import { TuneDetail } from '../model/TuneDetail';
@Component({
  selector: 'app-tune-info',
  templateUrl: './tune-info.page.html',
  styleUrls: ['./tune-info.page.scss'],
})

export class TuneInfoPage implements OnInit {

  tuneInformation: any;

  constructor(private activatedRoute: ActivatedRoute, private service: TheSessionService) { }

  getTune(id) {
    this.service.GetIssue(id).subscribe(tune => {
      this.tuneInformation = tune;
      console.log(this.tuneInformation);
    });
  }

  ngOnInit() {
    //getting the id from the url
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTune(id);
  }

}



