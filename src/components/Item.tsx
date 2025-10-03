import type { ItemInterface } from '../App';

interface ItemProps {
	item: ItemInterface;
	onDeleteItem: (id: string) => void;
}

export default function Item({ item, onDeleteItem }: ItemProps) {
	return (
		<li key={item.id}>
			<span className={`capitalize ${item.packed ? 'line-through' : ''}`}>
				{item.quantity} {item.description}
			</span>
			<button
				type='button'
				className='ml-5 cursor-pointer'
				onClick={() => onDeleteItem(item.id)}
			>
				❌
			</button>
		</li>
	);
}
