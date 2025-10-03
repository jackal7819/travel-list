import Item from './Item';

export interface ItemProps {
	id: string;
	description: string;
	quantity: number;
	packed: boolean;
}

export default function PackingList({ items }: { items: ItemProps[] }) {
	return (
		<div className='flex-1 w-full p-10 bg-yellow-900'>
			<ul className='flex justify-center gap-20 mx-auto text-2xl font-semibold text-white max-w-7xl'>
				{items.map((item) => (
					<Item key={item.id} {...item} />
				))}
			</ul>
		</div>
	);
}
