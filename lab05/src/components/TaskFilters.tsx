import React from 'react';
import { useRecoilState } from 'recoil';
import { filterState } from '../atoms';

const TaskFilters: React.FC = () => {
	const [filter, setFilter] = useRecoilState(filterState);

	return (
		<div>
			<button
				style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
				onClick={() => setFilter('all')}
			>
				Усі
			</button>
			<button
				style={{ fontWeight: filter === 'active' ? 'bold' : 'normal' }}
				onClick={() => setFilter('active')}
			>
				Активні
			</button>
			<button
				style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
				onClick={() => setFilter('completed')}
			>
				Виконані
			</button>
		</div>
	);
};

export default TaskFilters;
