import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '';
  constructor(private http: HttpClient) { }
totalAngularPackages :any;
  weatherData : Object
  res:any;
  states:any;
  msgTotal:any;
  tested:any;
Date:any;
today:any;
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/cc0e3799790b0b34bdeb6fef28c3daf7/17.447409200000003,-78.3724573?units=si').subscribe(data => {

      this.weatherData = data;
      console.log(data);
    });

    // this.http.get<any>('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/cc0e3799790b0b34bdeb6fef28c3daf7/17.447409200000003,-78.3724573?units=si').map(res => res.json());

      this.http.get<any>('https://api.covid19india.org/data.json').subscribe(data => {
            this.totalAngularPackages = data;
            this.states = data.statewise;
            this.tested = data.tested;
            console.log(data);
              console.log(this.states);
              console.log(this.tested);

             this.Date = this.tested.thistestedasof;

    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var year = now.getFullYear();
    

this.today = day + '/' + month + '/' + year;
console.log(this.today);

if(this.Date==this.today){

}


//               this.msgTotal = this.tested.reduce(function(prev, cur) {
//   return prev + cur.totalsamplestested;
// }, 0);
// console.log('Total Messages:', this.msgTotal); 

// let sum: number = this.tested.map(a => a.totalsamplestested).reduce(function(a, b)
// {
//   return a + b;
// });
// console.log(sum);

// var total = 0;
// this.tested.forEach(item => {
//     total += item.totalsamplestested;
// });
  
// console.log(total);


            // JSON.stringify(data.statewise);
            // this.records=

        });
  }
}




