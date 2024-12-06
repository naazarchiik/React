import React, { memo } from 'react';
import { useSetRecoilState } from 'recoil';

import { tasksState } from '../atoms';
import { toggleTaskCompletion, deleteTaskById } from '../utils/taskHelpers';
import { Task } from '../types';

interface TaskItemProps {
	task: Task;
}
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
	const setTasks = useSetRecoilState(tasksState);
	const { completed, title } = task;

	const handleToggleCompletion = () => {
		setTasks((prevTasks) => toggleTaskCompletion(prevTasks, task.id));
	};

	const handleDeleteTask = () => {
		setTasks((prevTasks) => deleteTaskById(prevTasks, task.id));
	};

	return (
		<li>
			<input
				type='checkbox'
				checked={completed}
				onChange={handleToggleCompletion}
			/>
			{title}
			<button onClick={handleDeleteTask}>Видалити</button>
		</li>
	);
};

export default memo(TaskItem);
