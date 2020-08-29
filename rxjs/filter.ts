import { of } from "rxjs";
import { filter } from "rxjs/operators";

const dataSource = of(1, 2, 3, 4, 5, 6, 10);

const subscription = dataSource
  .pipe(filter((value) => value > 3.5))
  .subscribe((value) => console.log(value));
