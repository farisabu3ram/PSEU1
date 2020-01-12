import { Component, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  title = 'PSEU1';

constructor(){
  console.log("constructor");
}
ngOnChanges(){
console.log("ngOnChanges");
}

ngOnInit(){
  console.log("ngOnInit");

}
ngAfterContentChecked(){
  console.log("ngAfterContentChecked");

}
ngAfterContentInit(){
  console.log("ngAfterContentInit");

}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked");

}
ngAfterViewInit(){
  console.log("ngAfterViewInit");

}
ngDoCheck(){
  console.log("ngDoCheck");

}
ngOnDestroy(){
  console.log("ngOnDestroy");

}

}
