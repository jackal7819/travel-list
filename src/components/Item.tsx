interface ItemProps {
	id: number;
	description: string;
	quantity: number;
	packed: boolean;
}

export default function Item({ id, description, quantity, packed }: ItemProps) {
	return (
		<li key={id}>
			<span className={`${packed ? 'line-through' : ''}`}>
				{quantity} {description}
			</span>
			<button type='button' className='ml-5 cursor-pointer'>
				❌
			</button>
		</li>
	);
}
