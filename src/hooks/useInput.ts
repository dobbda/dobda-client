import { kMaxLength } from 'buffer';
import { useState, useCallback, ChangeEvent } from 'react';

type UserInputProps = [string, (e: ChangeEvent) => void];

export const useInput = (initialState: string, maxLength=Infinity): UserInputProps => {
  const [value, setValue] = useState(initialState);
  const length = (value: string) => value.length <= maxLength;

const onChange = (event:any) => {
		const {
			target: { value },
		} = event;
		if (length(value)) {
			setValue(value);
		}
	};
  return [ value, onChange ];
};
