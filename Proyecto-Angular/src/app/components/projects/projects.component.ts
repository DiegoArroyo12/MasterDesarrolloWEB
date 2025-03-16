import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  imports: [HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects!: Project[];
  public url: string;

  constructor(
    private _projectService: ProjectService
  ){
    this.url = global.url;
  }

  ngOnInit(): void {
      this.getProjects();
  }

  getProjects() {
    this._projectService.getProjects().subscribe(
      response => {
        if (response.projects) {
          this.projects = response.projects;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
