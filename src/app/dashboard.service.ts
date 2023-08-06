import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  getTeamMembersSummary(): any[] {
    // Array of objects (Array holds the collection of objects here).
    const TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 3 },
      { Region: "South", TeamMembersCount: 10, TemporarilyUnavailableMembers: 1 },
      { Region: "West", TeamMembersCount: 45, TemporarilyUnavailableMembers: 0 },
      { Region: "North", TeamMembersCount: 21, TemporarilyUnavailableMembers: 5 },
    ];
    return TeamMembersSummary;
  }
}
