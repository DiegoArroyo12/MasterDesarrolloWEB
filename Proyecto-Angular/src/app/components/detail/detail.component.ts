import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Project } from '../../models/project';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  imports: [HttpClientModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: any;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = global.url;
  }

  ngOnInit(): void {
      this._route.params.subscribe(params => {
        let id = params['id'];
        this.getProject(id);
      });
  }

  getProject(id: any) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
