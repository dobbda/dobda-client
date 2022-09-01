import React, { useEffect, useRef } from 'react';

// query handling effect hooks
export const useDidMountEffect = (func: () => void, deps: React.DependencyList) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, deps);
};
