import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTasksState } from '../atoms';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
	const tasks = useRecoilValue(filteredTasksState);

	return (
		<ul>
			{tasks.map((task) => (
				<TaskItem key={task.id} task={task} />
			))}
		</ul>
	);
};

export default TaskList;
