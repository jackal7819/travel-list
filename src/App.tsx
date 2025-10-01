import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

export default function App() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}
