import { Component } from '@angular/core';
import { concat, concatAll, concatMap, delay, exhaustAll, exhaustMap, from, interval, map, merge, mergeAll, mergeMap, of, switchAll, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-flattening-operator',
  standalone: true,
  imports: [],
  templateUrl: './flattening-operator.component.html',
  styleUrl: './flattening-operator.component.css'
})
export class FlatteningOperatorComponent {


//mergemap
source=from(['Raghuvanshi','Vaidehi','Anjaneya']);
source1=from(['Raghuv','Vaidehi','Anjaneya']);
source2=from(['Mahakaal','Gora','Nandi']);

source3=from(['Radhe','Shyam','Gopi']);
source4=['Radhe','Shyam','Gopi'];

 concatexam = interval(2000).pipe(map(res=> res+1+" v1"),take(3));
 concatexam2 = interval(2000).pipe(map(res=> res+1+" v2"),take(6));
 concatexam3 = interval(2000).pipe(map(res=> res+1+" v3"),take(4));

 finalexampleconcat= concat(this.concatexam,this.concatexam2,this.concatexam3);

 megreexam = interval(2000).pipe(map(res=> res+1+" rv1"),take(3));
 mergeexam2 = interval(3000).pipe(map(res=> res+1+" rv2"),take(6));
 mergeexam3 = interval(1000).pipe(map(res=> res+1+" rv3"),take(4));

 finalexamplemerge= merge(this.megreexam,this.mergeexam2,this.mergeexam3);



 exexam = interval(2000).pipe(map(res=> res+1+" rashmi v1"),take(3));
 exexam2 = interval(3000).pipe(map(res=> res+1+" rashmi v2"),take(6));
 exexam3 = interval(1000).pipe(map(res=> res+1+" rashmi v3"),take(4));

 
 finalexampleexes= of(this.exexam,this.exexam2,this.exexam3);

constructor(){

  this.finalexampleexes.pipe( map(res=>res) ,exhaustAll() ).subscribe(res=> console.log(res +'   ooook'))

  this.finalexampleexes
  .pipe(
    exhaustMap(res=>res + 'ok')
       
  )
  .subscribe(res=> console.log(res));


// concat says that let me complete streem of data one by one
//this.finalexampleconcat.subscribe(res=> console.log(res))

// merge says that who will come i will merge this in  streem of data 
//this.finalexamplemerge.subscribe(res=> console.log(res))


// map transform the data

this.source
.pipe(
  map(res=>this.getdata(res)),
  mergeAll()
)
.subscribe(res=> console.log(res));

// if obserable return another obserable then mergemap resolve all of them and 
//we do not need subscribe again and again

  this.source1
  .pipe(
    mergeMap(res=>this.getdata(res))    
  )
  .subscribe(res=> console.log(res));

  
  this.source2
  .pipe(
    map(res=>this.getdata(res)),
    switchAll()    
  )
  .subscribe(res=> console.log(res));

  
// switchmap gives last one data

  this.source1
  .pipe(
    switchMap(res=>this.getdata(res)),       
  )
  .subscribe(res=> console.log(res));


  // 
  
  this.source3
  .pipe(
    concatMap(res=>this.getdata(res)),   
    
  )
  .subscribe(res=> console.log(res));

}






getdata(data:any){
return of(data+" jai ho ").pipe(delay(100));
}

}
