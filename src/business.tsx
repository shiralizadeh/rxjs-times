import { BehaviorSubject, combineLatest, map } from "rxjs";

const foo$ = new BehaviorSubject<number>(2);
const bar$ = new BehaviorSubject<number>(100);

const result$ = combineLatest([foo$, bar$]).pipe(
  map(([foo, bar]) => foo * bar)
);

export { foo$, bar$, result$ };
