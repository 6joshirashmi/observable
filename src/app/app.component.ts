import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscription, UnsubscriptionError, interval, map, retry, retryWhen, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observable';
 

arr=['Ram','Vaidehi','Anjaneya','Lakhan','Bharat','Shatrughan','Mahakaal','Gora'];

  promise = new Promise<any>((data) => {
    data(1);
    data(2);
    data(3);
  });
  // .then(element => console.log('Promise'  + element));

  observable = new Observable<any>((data) => {
    data.next(1);
    data.next(2);
    data.next(3);
  })
  // .subscribe(element => console.log('Observable ' + element));

  constructor() {
     ////////////////pipe()

    this.promise.then(element => console.log('Promise' + element));
    this.observable.pipe(
      retry(5)


    ).subscribe(
      (element) => { console.log('Observable ' + element); },
      //(err)=> console.log(err),

    )

       //////////////////  map() 

    const source = interval(2000);
    
    source.pipe(
      tap(res=>{
         if(res==8)
          console.log(res);
        
      }),
      map(res => this.arr[res])
    ).subscribe((res) => {
      console.log(res);
      
    }).unsubscribe();
  }

}
