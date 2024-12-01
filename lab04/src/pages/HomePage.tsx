import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div>
			<h2>Home Page</h2>
			<p>Welcome to the example app.</p>
			<Link to='/data'>Go to Data Page</Link>
		</div>
	);
};

export default HomePage;
