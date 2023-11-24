import { useCallback, useState } from "react";

const useToggle = ({ initialState = false } = {}) => {
  const [isShown, setIsShown] = useState(initialState);

  const show = useCallback(() => setIsShown(true), []);
  const hide = useCallback(() => setIsShown(false), []);
  const toggle = useCallback(() => setIsShown((isShown) => !isShown), []);

  return { isShown, show, hide, toggle };
};

export default useToggle;
