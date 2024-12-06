import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { tasksState } from '../atoms';

const TaskForm: React.FC = () => {
	const [title, setTitle] = useState<string>('');
	const setTasks = useSetRecoilState(tasksState);
	const handleAddTaskClick = () => {
		if (!title.trim()) return;

		setTasks((prevTasks) => [
			...prevTasks,
			{ id: Date.now(), title, completed: false },
		]);
		setTitle('');
	};

	return (
		<form onSubmit={(e) => { e.preventDefault(); handleAddTaskClick(); }}>
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Введіть завдання'
			/>
			<button type='submit'>Додати</button>
		</form>
	);
};

export default TaskForm;
