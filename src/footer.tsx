import React, { useState, useEffect } from "react";
import { result$ } from "./business";

export function Footer() {
  const [result, setResult] = useState<number>();

  useEffect(() => {
    result$.subscribe(setResult);
  }, []);

  return (
    <div className="card-footer">
      <div className="row">
        <div className="col-sm-2">Result</div>
        <div className="col-sm-10">{result}</div>
      </div>
    </div>
  );
}
