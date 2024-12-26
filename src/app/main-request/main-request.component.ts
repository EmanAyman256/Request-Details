import { Component } from '@angular/core';
import { Request } from '../models/Request.model';

@Component({
  selector: 'app-main-request',
  templateUrl: './main-request.component.html',
  styleUrls: ['./main-request.component.css']
})
export class MainRequestComponent {
  requests:Request[]=[{
    name:"Eman",
    requestedBy:"Eman Ayman",
    module:"BTP",
    startDate:new Date(),
    dueDate:new Date(),
    duration:1,
    assignee:"Mohamed Youssef",
    consultants:"Eman",
    activityType:"WFH",
  },
{
  name:"Eman",
  requestedBy:"Eman Ayman",
  module:"BTP",
  startDate:new Date(),
  dueDate:new Date(),
  duration:1,
  assignee:"Mohamed Youssef",
  consultants:"Eman",
  activityType:"WFH",

}]

  

}
