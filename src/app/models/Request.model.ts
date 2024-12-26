export interface Request {
    name:string
    requestedBy:string
    module:string
    startDate:Date
    dueDate:Date
    duration:number
    assignee:string
    consultants:string
    activityType:string
}