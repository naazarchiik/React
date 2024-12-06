import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import './App.css';

function App() {
	return (
		<div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
			<h1>Менеджер завдань</h1>
			<TaskForm />
			<TaskFilters />
			<TaskList />
		</div>
	);
}

export default App;
