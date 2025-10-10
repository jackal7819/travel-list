import { useState } from 'react';

import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

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

	const handleDeleteItems = () => {
		setItems([]);
	};

	const handleToggleItem = (id: string) => {
		setItems((items) =>
			items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
		);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<Logo />
			<Form onAddItem={handleAddItem} />
			<PackingList
				items={items}
				onDeleteItems={handleDeleteItems}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
			/>
			<Stats items={items} />
		</div>
	);
}
