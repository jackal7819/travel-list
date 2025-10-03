import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import Stats from './components/Stats';
import PackingList from './components/PackingList';

export interface ItemInterface {
	id: string;
	description: string;
	quantity: number;
	packed: boolean;
}

export default function App() {
	const [items, setItems] = useState<ItemInterface[]>([]);

	const handleAddItem = (item: ItemInterface) => {
		setItems((items) => [...items, item]);
	};

	const handleDeleteItem = (id: string) => {
		setItems((items) => items.filter((item) => item.id !== id));
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<Logo />
			<Form onAddItem={handleAddItem} />
			<PackingList items={items} onDeleteItem={handleDeleteItem} />
			<Stats />
		</div>
	);
}
