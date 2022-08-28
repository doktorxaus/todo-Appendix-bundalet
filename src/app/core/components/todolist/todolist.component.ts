import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],


})
export class TodolistComponent implements OnInit,OnChanges {
  @Input () isTodoFinish: boolean = true;
  @Input () cartNumber:number = 0;
  @Input () cartTitle:string ='RED ANGULAR';
  @Input () dateCreation:Date = new Date();
  @Input () dateCreations:Data = new Date();


  constructor() { }


  public ngOnChanges():void{
    console.log(this.cartTitle,'ngOnChanges')
  }

  public ngOnInit(): void {
    console.log(this.cartTitle,'ngOnInit')
  }
  public edittodo():void{
    console.log('edit card',this.cartTitle)
  }
  public delittodo():void{
    console.log('edit card',this.cartTitle)
  }
   public todostatusChange():void{
    this.isTodoFinish  = !this.isTodoFinish;
   }


}
