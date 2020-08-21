import { of } from 'rxjs';
import { map } from 'rxjs/operators';
/*
 *  'of' allows you to deliver values in a sequence
 *  In this case, it will emit 1,2,3,4,5 in order.
 */
const dataSource = of(1, 2, 3, 4, 5);

const subscription = dataSource
    .pipe(
        map(value => value + 1)
    )
    .subscribe(value => console.log(value));