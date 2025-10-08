import type { ItemInterface } from '../App';

interface ItemProps {
	item: ItemInterface;
	onDeleteItem: (id: string) => void;
	onToggleItem: (id: string) => void;
}

export default function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
	return (
		<li key={item.id} className='flex items-center gap-5'>
			<input
				aria-label='packed'
				type='checkbox'
				checked={item.packed}
				onChange={() => onToggleItem(item.id)}
				className="transition border-2 rounded appearance-none cursor-pointer size-6 checked:bg-orange-400 checked:border-orange-400 bg-yellow-100 checked:before:content-['✓'] flex items-center justify-center"
			/>
			<span className={`capitalize ${item.packed ? 'line-through' : ''}`}>
				{item.quantity} {item.description}
			</span>
			<button type='button' className='cursor-pointer' onClick={() => onDeleteItem(item.id)}>
				❌
			</button>
		</li>
	);
}
