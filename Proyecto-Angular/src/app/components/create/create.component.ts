import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-create',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  providers: [ProjectService]
})
export class CreateComponent {
  public title: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Crear Proyecto"
    this.project = new Project('','','','', 2025,'','')
  }

  onSubmit(form: any){
    console.log(this.project);
  }
}
