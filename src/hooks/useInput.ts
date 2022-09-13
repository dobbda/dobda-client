import { kMaxLength } from 'buffer';
import { useState, useCallback, ChangeEvent } from 'react';

export const useInput = <T>(initialState: T, maxLength = Infinity): [T, (e: ChangeEvent) => void] => {
  const [value, setValue] = useState(initialState);
  const length = (value: string) => value.length <= maxLength;

  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    if (length(value)) {
      setValue(value);
    }
  };
  return [value, onChange];
};
