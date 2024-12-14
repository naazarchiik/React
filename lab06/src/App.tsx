import React, { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MemoizedComponent from './components/MemoizedComponent';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import useAppState from './hooks/useAppState';
import { AppProvider } from './context/AppContext';
import './styles/App.css';

const AppContent: React.FC = () => {
	const { value, setValue, error } = useAppState();

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<>
			<Header />
			<div className='content'>
				<MemoizedComponent value={value} />
				<input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder='Enter new value'
				/>
			</div>
			<Footer />
		</>
	);
};

const App: React.FC = () => {
	return (
		<AppProvider>
			<ErrorBoundary>
				<Suspense fallback={<Loading />}>
					<AppContent />
				</Suspense>
			</ErrorBoundary>
		</AppProvider>
	);
};

export default App;
