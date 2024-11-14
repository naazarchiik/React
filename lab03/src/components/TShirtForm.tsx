import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './TShirtForm.css';
import TShirtPreview from '../assets/T-ShirtPreview.png';

// Створення схеми валідації з yup
const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	size: yup.string().required('Please select a size'),
	comments: yup
		.string()
		.max(200, 'The comment cannot exceed 200 characters')
		.optional(),
});

interface IFormInputs {
	name: string;
	size: string;
	comments?: string;
}

const TShirtForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<IFormInputs> = (data) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{ maxWidth: '500px', margin: 'auto' }}
		>
			<p>Enter your name and size to sign up for a T-Shirt.</p>

			<label>Name *</label>
			<input {...register('name')} placeholder="Your name" type='text' />
			{errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

			<label>Shirt size *</label>
			<div className='size'>
				<label>
					<input type='radio' value='XS' {...register('size')} />
					XS
				</label>
				<label>
					<input type='radio' value='S' {...register('size')} />S
				</label>
				<label>
					<input type='radio' value='M' {...register('size')} />M
				</label>
				<label>
					<input type='radio' value='L' {...register('size')} />L
				</label>
				<label>
					<input type='radio' value='XL' {...register('size')} />
					XL
				</label>
			</div>
			{errors.size && <p style={{ color: 'red' }}>{errors.size.message}</p>}

            <label>T-shirt Preview</label>
            <img src={TShirtPreview} alt='T-shirt preview' />

			<label>Other thoughts or comments</label>
			<input {...register('comments')} placeholder='Your answer' type='text' />

			<button type='submit'>Submit</button>
		</form>
	);
};

export default TShirtForm;
