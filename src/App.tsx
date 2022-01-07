import React, { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [foo, setFoo] = useState(2);
  const [bar, setBar] = useState(100);

  const onFooChanged = useCallback((e: any) => {
    setFoo(e.target.value);
  }, []);

  const onBarChanged = useCallback((e: any) => {
    setBar(e.target.value);
  }, []);

  const result = foo * bar;

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
                type="number"
                className="form-control"
                id="foo"
                value={foo}
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
                type="number"
                className="form-control"
                id="bar"
                value={bar}
                onChange={onBarChanged}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-sm-2">Result</div>
            <div className="col-sm-10">{result}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
