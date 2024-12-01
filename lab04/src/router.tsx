import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataPage, { fetchData } from './pages/DataPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/data',
		element: <DataPage />,
		loader: fetchData,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);
