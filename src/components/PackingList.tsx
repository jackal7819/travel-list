import Item from './Item';

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: true },
	{ id: 3, description: 'Sunglasses', quantity: 1, packed: false },
];

export default function PackingList() {
	return (
		<div className='flex-1 w-full p-10 bg-yellow-900'>
			<ul className='flex justify-center gap-20 mx-auto text-2xl font-semibold text-white max-w-7xl'>
				{initialItems.map((item) => (
					<Item key={item.id} {...item} />
				))}
			</ul>
		</div>
	);
}
