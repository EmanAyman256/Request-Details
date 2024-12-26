import { Component } from '@angular/core';
import { Request } from '../models/Request.model';

@Component({
  selector: 'app-main-request',
  templateUrl: './main-request.component.html',
  styleUrls: ['./main-request.component.css']
})
export class MainRequestComponent {
  requests:Request[]=[{
    name:"Eman Ayman",
    requestedBy:"E.A",
    module:"BTP",
    startDate:new Date(),
    dueDate:new Date(),
    duration:1,
    assignee:"Mohamed Youssef",
    consultants:"Eman",
    activityType:"WFH",
  },
{
  name:"A",
  requestedBy:"A.A",
  module:"BTP",
  startDate:new Date(),
  dueDate:new Date(),
  duration:1,
  assignee:"M.Y ",
  consultants:"A",
  activityType:"WFH",

},
{
  name:"M",
  requestedBy:"M.A",
  module:"BTP",
  startDate:new Date(),
  dueDate:new Date(),
  duration:1,
  assignee:"M.Y ",
  consultants:"M",
  activityType:"WFH",

},{
  name:"A",
  requestedBy:"A.A",
  module:"BTP",
  startDate:new Date(),
  dueDate:new Date(),
  duration:1,
  assignee:"M.Y ",
  consultants:"A",
  activityType:"WFH",

},
{
  name:"A",
  requestedBy:"A.A",
  module:"BTP",
  startDate:new Date(),
  dueDate:new Date(),
  duration:1,
  assignee:"M.Y ",
  consultants:"A",
  activityType:"WFH",

}]

  

}
