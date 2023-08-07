import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  newProject: Project = new Project();
  editProject: Project = new Project();
  deleteProject: Project = new Project();
  deleteIndex: any;
  editIndex: any;
  searchBy: string = "ProjectName";
  searchText: string = "";

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    // response the return value from the observable.
    this.projectService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      }
    )
  }

  onSaveClick() {
    this.projectService.insertProject(this.newProject).subscribe((response) => {
      let p = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects.push(p);

      // Clear the text boxes.
      this.newProject.projectID = null;
      this.newProject.projectName = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
    }, (error) => {
      console.log(error)
    })
  }

  onEditClick(event: any, index: number) {
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;

    this.editIndex = index;
  }

  onUpdateClick() {
    this.projectService.updateProject(this.editProject).subscribe((response: Project) => {
      var p = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects[this.editIndex] = p;

      this.editProject.projectID = null;
      this.editProject.projectName = null;
      this.editProject.dateOfStart = null;
      this.editProject.teamSize = null;
    }, (error) => console.log(error));
  }

  onDeleteClick(event: any, index: number) {
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;

    this.deleteIndex = index;
  }

  onDeleteConfirmClick() {
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe((response) => {
      this.projects.splice(this.deleteIndex, 1);

      this.deleteProject.projectID = null;
      this.deleteProject.projectName = null;
      this.deleteProject.dateOfStart = null;
      this.deleteProject.teamSize = null;
    }, (error) => console.log(error));
  }

  onSearchClick() {
    this.projectService.searchProject(this.searchBy, this.searchText).subscribe((response) => {
      this.projects = response
    }, (error) => {
      console.log(error)
    })
  }
}