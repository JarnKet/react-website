import React from "react";

import { useEffect, useRef } from "react";

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Auto Focus</h1>

      {/* <input type="text" autoFocus /> */}
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default AutoFocusInput;
