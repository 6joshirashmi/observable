import { Component } from '@angular/core';
import { from, interval, map, mergeAll, mergeMap, of } from 'rxjs';

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
constructor(){

  this.source
  .pipe(
    map(res=>this.getdata(res)),
    mergeAll()
  )
  .subscribe(res=> console.log(res));


  this.source1
  .pipe(
    mergeMap(res=>this.getdata(res))
    
  )
  .subscribe(res=> console.log(res));
}






getdata(data:any){
return of(data+" jai ho ");
}

}
