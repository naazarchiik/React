import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';

function App() {
	return (
		<>
			<div>
				<h1>React Router Loader Example</h1>
				<RouterProvider router={router} />
			</div>
		</>
	);
}

export default App;
