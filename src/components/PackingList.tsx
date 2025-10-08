import type { ItemInterface } from '../App';
import Item from './Item';

export interface ItemProps {
	items: ItemInterface[];
	onDeleteItem: (id: string) => void;
	onToggleItem: (id: string) => void;
}

export default function PackingList({ items, onDeleteItem, onToggleItem }: ItemProps) {
	return (
		<div className='flex-1 w-full p-10 bg-yellow-900'>
			<ul className='flex justify-center gap-20 mx-auto text-2xl font-semibold text-white max-w-7xl'>
				{items.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
		</div>
	);
}
