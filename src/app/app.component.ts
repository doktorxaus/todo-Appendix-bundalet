import { FormStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { applicationinterfeises } from './interface/application.interfeises';
import { TodolistService } from './servise/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit{

 public todoList:applicationinterfeises []=[];
 constructor(private todolistservise: TodolistService){

 }
 public ngOnInit():void {
  this.todoList = this.todolistservise.gettodolist;
  console.log(this.todoList,'this.todoList')


 }



  // {
  //   isTodoFinish:false,
  //   id:1,
  //   cartTitle:`read angular doc`,
  //   dateCreation:new Date(),
  //   dateCreations:new Date(),

  // },
  // {
  //   isTodoFinish:false,
  //   id:2,
  //   cartTitle:`read`,
  //   dateCreation:new Date(),
  //   dateCreations:new Date(),

  // },
  // {
  //   isTodoFinish:false,
  //   id:3,
  //   cartTitle:`angular doc`,
  //   dateCreation:new Date(),
  //   dateCreations:new Date(),

  // }





}
