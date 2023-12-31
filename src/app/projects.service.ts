import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>("api/projects");
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>("api/projects", newProject);
  }

  updateProject(exisitingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>("api/projects", exisitingProject);
  }

  deleteProject(projectID: number): Observable<string> {
    return this.httpClient.delete<string>("api/projects?projectID=" + projectID);
  }

  searchProject(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>("api/projects/search/" + searchBy + "/" + searchText);
  }
}
