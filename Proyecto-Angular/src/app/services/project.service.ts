import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./global";
import { Project } from "../models/project";

@Injectable()
export class ProjectService{
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
    }

    testService(){
        return 'Probando el servicio de Angular';
    }

    saveProject(project: Project): Observable <any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-project', params, {headers: headers});
    }

    getProjects(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.get(this.url+'projects', {headers: headers});
    }

    getProject(id: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'project/' + id, {headers: headers});
    }

    deleteProject(id:any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + 'project-delete/' + id, {headers: headers});
    }

    updateProject(project:any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let params = JSON.stringify(project);

        return this._http.put(this.url + 'project-update/' + project._id, params, {headers: headers});
    }
}