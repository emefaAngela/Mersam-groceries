import { useState, useEffect } from "react";
import { getItem, setItem } from "../../utils/localStorage";

export const usePersistedState = <T>(key: string, defaultValue: T) => {
  const [state, setState] = useState<T>(() => {
    return getItem(key) || defaultValue;
  });

  useEffect(() => {
    setItem(key, state);
  }, [state, key]);

  return [state, setState] as const;
};
