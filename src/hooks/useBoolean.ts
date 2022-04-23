import React from "react";

const useBoolean = (initialState: boolean = false) => {
  const [state, setState] = React.useState<boolean>(initialState);

  const toggle = React.useCallback(() => {
    setState((prev) => !prev);
  }, []);

  const setTrue = React.useCallback(() => {
    setState(true);
  }, []);

  const setFalse = React.useCallback(() => {
    setState(false);
  }, []);

  return {
    state,
    toggle,
    setTrue,
    setFalse,
  };
};

export default useBoolean;
