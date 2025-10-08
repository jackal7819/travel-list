import type { ItemInterface } from '../App';

interface StatsProps {
	items: ItemInterface[];
}

export default function Stats({ items }: StatsProps) {
	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((numPacked / numItems) * 100);

	return (
		<footer className='flex items-center justify-center w-full p-10 bg-cyan-200'>
			<em className='text-3xl font-bold'>
				{items.length === 0 && 'Start adding some items to your packing list 🚀'}
				{items.length > 0 &&
					(percentage === 100
						? 'You got everything! Ready to go ✈️'
						: `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`)}
			</em>
		</footer>
	);
}
