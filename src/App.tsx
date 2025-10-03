import PackingList, { type ItemProps } from './components/PackingList';
import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import Stats from './components/Stats';

export default function App() {
	const [items, setItems] = useState<ItemProps[]>([]);

	const handleAddItem = (item: ItemProps) => {
		setItems((items) => [...items, item]);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<Logo />
			<Form onAddItem={handleAddItem} />
			<PackingList items={items} />
			<Stats />
		</div>
	);
}
