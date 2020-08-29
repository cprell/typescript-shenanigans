// @ts-nocheck
// don't even dare compiling this.

/**
 * Things inside a e.g. pipe statement
 */

// wait for a 200ms pause
import {
    catchError,
    combineLatest,
    debounceTime,
    distinctUntilChanged, mergeMap, shareReplay,
    switchMap, take,
    takeUntil,
} from "rxjs/operators";
import { fromEvent } from "rxjs";

debounceTime(200),
// if the value is the same, ignore
distinctUntilChanged(),
// if an updated value comes through while request is still active cancel previous request and 'switch' to new observable
switchMap((searchTerm) => typeaheadApi.search(searchTerm));

/**
 * Creation operators
 * These operators allow the creation of an observable from nearly anything. From generic to specific use-cases you are free to turn everything into a stream.
 */

// For example, suppose we are creating a progress bar as a user scrolls through an article. We could turn the scroll event into a stream by utilizing the fromEvent operator:

fromEvent(scrollContainer, "scroll")
  .pipe(takeUntil(userLeavesArticle))
  .subscribe((event) => {
    // calculate and update DOM
  });

/**
 * Combination operators
 * The combination operators allow the joining of information from multiple observables. Order, time, and structure of emitted values is the primary variation among these operators.
 */

// give me the last emitted value from each source, whenever either source emits
combineLatest(sourceOne, sourceTwo).subscribe(
  ([latestValueFromSourceOne, latestValueFromSourceTwo]) => {
    // perform calculation
  }
);

// The most commonly used combination operators are combineLatest, concat, merge, startWith, and withLatestFrom.

/**
 * ​Error handling operators​
 */

source
  .pipe(
    mergeMap((value) => {
      return makeRequest(value).pipe(
        catchError(handleErrorByReturningObservable)
      );
    })
  )
  .subscribe((value) => {
    // take action
  });

/**
 * Filtering operators​
 * The filtering operators provide techniques for accepting - or declining - values from an observable source and dealing with backpressure, or the build up of values within a stream.
 */

// For example, we can use the take operator to capture only the first 5 emitted values from a source:
source.pipe(take(5)).subscribe(value => {
    // take action
});

// The most commonly used filtering operators are debounceTime, distinctUntilChanged, filter, take, and takeUntil.

/**
 * In RxJS observables are cold, or unicast (one source per subscriber) by default.
 * These operators can make an observable hot, or multicast, allowing side-effects to be shared among multiple subscribers.
 */

const source = data.pipe(shareReplay());

const firstSubscriber = source.subscribe(value => {
    // perform some action
});

// sometime later...

// second subscriber gets last emitted value on subscription, shares execution context with 'firstSubscriber'
const secondSubscriber = source.subscribe(value => {
    // perform some action
});

/**
 * Transforming values as they pass through an operator chain is a common task.
 * These operators provide transformation techniques for nearly any use-case you will encounter.
 */

source
    .pipe(
        scan((accumulatedState, currentState) => {
            return { ...accumulatedState, ...currentState };
        })
    )
    .subscribe();

// The most commonly used transformation operators are concatMap, map, mergeMap, scan, and switchMap.