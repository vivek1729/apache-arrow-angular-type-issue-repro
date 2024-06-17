import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { tableFromArrays } from 'apache-arrow';
// function createArrowTable() {
//   // Create a Table from JavaScript arrays sample from https://arrow.apache.org/docs/js/
//   const LENGTH = 2000;
//     const rainAmounts = Float32Array.from(
//         { length: LENGTH },
//         () => Number((Math.random() * 20).toFixed(1)));
//     const rainDates = Array.from(
//         { length: LENGTH },
//         (_, i) => new Date(Date.now() - 1000 * 60 * 60 * 24 * i));
//     const rainfall = tableFromArrays({
//         precipitation: rainAmounts,
//         date: rainDates
//     });
//     console.table([...rainfall]);
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit() {
    const timer: number = setTimeout(() => {
      // createArrowTable();
      console.log('This will be logged after 2 seconds');
    }, 2000);
    console.log(timer);
  }
}
