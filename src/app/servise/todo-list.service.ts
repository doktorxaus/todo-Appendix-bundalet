import {  Injectable } from "@angular/core";
import { applicationinterfeises } from "../interface/application.interfeises";


 @Injectable({ providedIn:'root'  })    /// 1 подключение в корень приложения.2 в модуль.3 в компонент


 export class TodolistService{

private todolist:applicationinterfeises[]= [
  {

  isTodoFinish:false,
    id:1,
    cartTitle:`read angular doc`,
    dateCreation:new Date,
    dateCreations:new Date,
},

{
  isTodoFinish:false,
    id:2,
    cartTitle:`read `,
    dateCreation:new Date,
    dateCreations:new Date,
},
{
  isTodoFinish:false,
    id:3,
    cartTitle:`angular doc`,
    dateCreation:new Date,
    dateCreations:new Date,
}


];
public get gettodolist():applicationinterfeises[]{
  return this.todolist;
}


 }
