import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from '../../services/upload.service';
import { global } from '../../services/global'
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-create',
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  providers: [ProjectService, UploadService]
})
export class CreateComponent {
  public title: string;
  public project: Project;
  public save_project: any;
  public status: string = '';
  public filesToUpload: Array<File> = new Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Crear Proyecto"
    this.project = new Project('','','','', 2025,'','')
  }

  onSubmit(form: any){
    // Guardar datos básicos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          // Subir Imagen
          this._uploadService.makeFileRequest(global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
          .then((result: any) => {
              this.save_project = result.project;
              this.status = 'success';
              form.reset();
            })
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any> error);
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}