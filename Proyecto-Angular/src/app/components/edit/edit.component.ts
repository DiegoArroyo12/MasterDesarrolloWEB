import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Project } from '../../models/project';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { global } from '../../services/global';

@Component({
  selector: 'app-edit',
  imports: [HttpClientModule, FormsModule, RouterModule],
  templateUrl: '../create/create.component.html',
  styleUrl: './edit.component.scss',
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit{
  public title: string;
    public project!: Project;
    public save_project: any;
    public status: string = '';
    public filesToUpload: Array<File> = new Array<File>;
    public url: string;
  
    constructor(
      private _projectService: ProjectService,
      private _uploadService: UploadService,
      private _route: ActivatedRoute,
      private _router: Router,
    ){
      this.title = "Editar Proyecto"
      this.project = new Project('','','','', 2025,'','')
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

  onSubmit(form: any) {
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){
          // Subir Imagen
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                  this.save_project = result.project;
                  this.status = 'success';
                });
          } else {
            this.save_project = response.project;
            this.status = 'success';
          }   
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
