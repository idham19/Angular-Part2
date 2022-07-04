import { Component, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let up=document.getElementById('upel')
console.log(up)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled:Boolean=true;

handleTakeOff(){
  let result=window.confirm('are you sure the shuttle is ready for takeoff?')
  if(result){
    this.color='blue';
    this.height=10000;
    this.width=0;
    this.message='Shuttle in flight'
  }
}

handleLand(){
  alert('The shuttle is landing.Landign gear is engaged')
this.color='green';
this.height=0;
this.width=0;
this.message='The shuttle has landed'

}
handleAbort(){
  let result=window.confirm('Do you really want to abort the mission')
  if(result){
    this.message='Mission aborted'
    this.color='red';
    this.height=0;
  }
}
moveRocket(rocketImage,direction){
  if(direction==='right'){
    let movement= parseInt(rocketImage.style.left)+10+'px';
    rocketImage.style.left=movement
    this.width=this.width+10000

  }
  else if (direction==='left'){
    let movement=parseInt(rocketImage.style.left)-10+'px'
    rocketImage.style.left=movement
    this.width=this.width-10000
  }
  else if(direction==='up'){
    let movement=parseInt(rocketImage.style.bottom)+10+'px'
    rocketImage.style.bottom=movement;
    this.height=this.height+10000
      
  }
  else if(direction==='down'){
    let movement=parseInt(rocketImage.style.bottom)-10+'px'
    rocketImage.style.bottom=movement;
    this.height=this.height-10000

  }
}
}
