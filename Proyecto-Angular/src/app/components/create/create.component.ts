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
  public status: string = '';

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Crear Proyecto"
    this.project = new Project('','','','', 2025,'','')
  }

  onSubmit(form: any){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          this.status = 'success';
          form.reset();
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any> error);
      }
    )
  }
}
