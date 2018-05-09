export class RemoteAccount {
  public name : string;
  public url : string;
  public token : string;
}

export class UserData {
  public fullName?: string;
  public email?: string;
}

export class Tasks {
  
}

export class IssueDetails {
  public id: string
  public entityId: string
  public comment: any
  public field: Array<FieldValue> 
  public tag: any
  public jiraId?: string
}

class FieldValue {
  public name: string
  public value: any
}

export class WorkItemData {
  public accountId: number
  public date: number
  public duration: number
  public issueId: string
  public summary: string
  public agile?: string
  public recordedTime = 0
  public startDate = Date.now();
}

export class newIssue {
  public project: string
  public summary: string
  public description: string
}

export class WorkHoursInfo {
  constructor(
    public timeStartHour: string,
    public timeStartMinute: string,
    public timeEndHour: string,
    public timeEndMinute: string,
    public week: Week) 
    { }
}

export class Week {
  constructor(
    public monday: boolean,
    public tuesday: boolean,
    public wednesday: boolean,
    public thursday: boolean,
    public friday: boolean,
    public saturday: boolean,
    public sunday: boolean) 
    { }
}