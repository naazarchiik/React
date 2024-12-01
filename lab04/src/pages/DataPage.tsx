import { useLoaderData, Link} from 'react-router-dom';
import { fetchData } from '../api/data';

type Post = {
	id: number;
	title: string;
};

const DataPage = () => {
	const data = useLoaderData() as Post[];

	return (
		<div>
			<h2>Data Page</h2>
			<Link to='/'>Go to Home Page</Link>
			<ul>
				{data.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default DataPage;
export { fetchData };
