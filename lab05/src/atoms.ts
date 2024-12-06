import { atom, selector } from 'recoil';
import { Task } from './types';

export const tasksState = atom<Task[]>({
	key: 'tasksState',
	default: [],
});

export const filterState = atom<'all' | 'active' | 'completed'>({
	key: 'filterState',
	default: 'all',
});

export const filteredTasksState = selector<Task[]>({
	key: 'filteredTasksState',
	get: ({ get }) => {
		const tasks = get(tasksState);
		const filter = get(filterState);

		switch (filter) {
			case 'active':
				return tasks.filter((task) => !task.completed);
			case 'completed':
				return tasks.filter((task) => task.completed);
			default:
				return tasks;
		}
	},
});
