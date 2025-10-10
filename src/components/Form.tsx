import type { ItemInterface } from '../App';
import { useState } from 'react';

interface FormProps {
	onAddItem: (item: ItemInterface) => void;
}

export default function Form({ onAddItem }: FormProps) {
	const [quantity, setQuantity] = useState(1);
	const [description, setDescription] = useState('');

	const handleChangeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setQuantity(parseInt(event.target.value));
	};

	const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!description) return;

		const newItem = {
			id: crypto.randomUUID(),
			description,
			quantity,
			packed: false,
		};

		onAddItem(newItem);
		setQuantity(1);
		setDescription('');
	};

	return (
		<form
			className='flex items-center justify-center w-full gap-10 p-10 bg-orange-400'
			onSubmit={handleSubmit}
		>
			<h2 className='text-3xl font-bold'>What do you need for your 😍 trip?</h2>
			<select
				name='quantity'
				aria-label='quantity'
				value={quantity}
				onChange={handleChangeQuantity}
				className='w-32 text-2xl font-semibold text-center duration-500 bg-yellow-100 border-4 border-transparent rounded-full outline-none h-14 focus:border-amber-900'
			>
				{Array.from({ length: 9 }, (_, i) => (
					<option key={i + 1} value={i + 1}>
						{i + 1}
					</option>
				))}
			</select>
			<input
				name='item'
				type='text'
				placeholder='Item...'
				value={description}
				onChange={handleChangeDescription}
				className='w-64 text-2xl font-semibold text-center duration-500 bg-yellow-100 border-4 border-transparent rounded-full outline-none h-14 focus:border-amber-900'
			/>
			<button
				type='submit'
				className='w-32 text-2xl font-semibold text-center duration-500 bg-yellow-100 border-4 border-transparent rounded-full cursor-pointer h-14 hover:border-amber-900 active:bg-amber-900 active:text-white'
			>
				Add
			</button>
		</form>
	);
}
