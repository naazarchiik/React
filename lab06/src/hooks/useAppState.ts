import { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const useAppState = () => {
	const { state, setState } = useAppContext();
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		try {
			console.log(`Value changed to: ${state}`);
		} catch (err) {
			setError(err as Error);
		}
	}, [state]);

	return { value: state, setValue: setState, error };
};

export default useAppState;
