import type { ItemProps } from './PackingList'

export default function Item({ id, description, quantity, packed }: ItemProps) {
	return (
		<li key={id}>
			<span className={`capitalize ${packed ? 'line-through' : ''}`}>
				{quantity} {description}
			</span>
			<button type='button' className='ml-5 cursor-pointer'>
				❌
			</button>
		</li>
	);
}
