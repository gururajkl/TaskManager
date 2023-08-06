import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NumberOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  UpcomingProject: number;
  PendingTasks: number;
  ProjectCost: number;

  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[];
  TeamMembersSummary: any;
  TeamMembers: any;

  constructor(private dashboardService: DashboardService) { }

  // Method runs when page starts.
  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "Gururaj";
    this.NumberOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.UpcomingProject = 3;
    this.ProjectCost = 345;
    this.CurrentExpenditure = 321
    this.AvailableFunds = 675;
    this.PendingTasks = 3;

    this.Clients = ["ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"];
    this.Projects = ["Project A", "Project B", "Project C", "Project D"];
    this.Years = [2019, 2018, 2017, 2016];

    // Array of objects (Array holds the collection of objects here).
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = [
      {
        Region: "East", Members: [
          { ID: 1, Name: "Ford", Status: "Offline" },
          { ID: 2, Name: "Mike", Status: "Available" },
          { ID: 3, Name: "Tokio", Status: "Busy" },
          { ID: 4, Name: "Farid", Status: "Away" },
        ]
      },
      {
        Region: "West", Members: [
          { ID: 1, Name: "Ford", Status: "Offline" },
          { ID: 2, Name: "Mike", Status: "Available" },
          { ID: 3, Name: "Tokio", Status: "Busy" },
          { ID: 4, Name: "Farid", Status: "Away" },
        ]
      },
      {
        Region: "North", Members: [
          { ID: 1, Name: "Ford", Status: "Offline" },
          { ID: 2, Name: "Mike", Status: "Available" },
          { ID: 3, Name: "Tokio", Status: "Busy" },
          { ID: 4, Name: "Farid", Status: "Away" },
        ]
      },
      {
        Region: "South", Members: [
          { ID: 1, Name: "Ford", Status: "Offline" },
          { ID: 2, Name: "Mike", Status: "Available" },
          { ID: 3, Name: "Tokio", Status: "Busy" },
          { ID: 4, Name: "Farid", Status: "Away" },
        ]
      }
    ]
  }

  onProjectChange($event: any) {
    if ($event.target.innerHTML == "Project A") {
      this.ProjectCost = 6578
      this.CurrentExpenditure = 6754
      this.AvailableFunds = 2343
    } else if ($event.target.innerHTML == "Project B") {
      this.ProjectCost = 234
      this.CurrentExpenditure = 321
      this.AvailableFunds = 5567
    } else if ($event.target.innerHTML == "Project C") {
      this.ProjectCost = 212
      this.CurrentExpenditure = 342
      this.AvailableFunds = 456
    } else if ($event.target.innerHTML == "Project D") {
      this.ProjectCost = 321
      this.CurrentExpenditure = 567
      this.AvailableFunds = 7765
    }
  }
}