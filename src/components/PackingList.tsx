import type { ItemInterface } from '../App';
import { useState } from 'react';
import Item from './Item';

export interface ItemProps {
	items: ItemInterface[];
	onDeleteItem: (id: string) => void;
	onToggleItem: (id: string) => void;
}

export default function PackingList({ items, onDeleteItem, onToggleItem }: ItemProps) {
	const [sortBy, setSortBy] = useState('input');

	const sortedItems =
		sortBy === 'input'
			? items
			: sortBy === 'description'
			? items.slice().sort((a, b) => a.description.localeCompare(b.description))
			: items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className='flex flex-col flex-1 w-full p-10 bg-yellow-900'>
			<ul className='grid items-center flex-1 grid-cols-1 mx-auto text-2xl font-semibold text-white gap-x-20 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl'>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className='flex items-center justify-center gap-10 mt-10'>
				<select
					aria-label='sort'
					className='text-2xl font-semibold text-center duration-500 bg-yellow-100 border-4 border-transparent rounded-full outline-none h-14 focus:border-amber-900 w-96'
					value={sortBy}
					onChange={(event) => setSortBy(event.target.value)}
				>
					<option value='input'>Sort by input order</option>
					<option value='description'>Sort by description</option>
					<option value='packed'>Sort by packed status</option>
				</select>
			</div>
		</div>
	);
}
