import React, { useCallback, useEffect, useRef } from "react";
import "./App.css";
import { bar$, foo$ } from "./business";
import { Footer } from "./footer";

function App() {
  const fooRef = useRef<HTMLInputElement>(null);
  const barRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    foo$.subscribe((foo) => {
      fooRef.current && (fooRef.current.value = foo.toString());
    });
    bar$.subscribe((bar) => {
      barRef.current && (barRef.current.value = bar.toString());
    });
  }, []);

  const onFooChanged = useCallback((e: any) => {
    foo$.next(e.target.value);
  }, []);

  const onBarChanged = useCallback((e: any) => {
    bar$.next(e.target.value);
  }, []);

  return (
    <div className="container">
      <div className="card m-5">
        <div className="card-body">
          <div className="form-group row">
            <label htmlFor="foo" className="col-sm-2 col-form-label">
              Foo
            </label>
            <div className="col-sm-10">
              <input
                ref={fooRef}
                type="number"
                className="form-control"
                id="foo"
                onChange={onFooChanged}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bar" className="col-sm-2 col-form-label">
              Bar
            </label>
            <div className="col-sm-10">
              <input
                ref={barRef}
                type="number"
                className="form-control"
                id="bar"
                onChange={onBarChanged}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
