import { Task } from '../types';

export const toggleTaskCompletion = (tasks: Task[], taskId: number): Task[] => {
	if (!Array.isArray(tasks)) {
		console.error('Tasks must be an array');
		return tasks;
	}

	return tasks.map((task) => 
		task.id === taskId 
			? { ...task, completed: !task.completed } 
			: task
	);
};

export const deleteTaskById = (tasks: Task[], taskId: number): Task[] => {
	if (!Array.isArray(tasks)) {
		console.error('Tasks must be an array');
		return tasks;
	}
	return tasks.filter((task) => 
		task.id !== taskId
	);
};
