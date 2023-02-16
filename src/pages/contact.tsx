import { useState } from 'react';
import { useForm } from 'react-hook-form';

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const { register, handleSubmit, reset } = useForm<ContactFormData>();
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState('');

    const onSubmit = async (data: ContactFormData) => {
        setSubmitting(true);

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const { message } = await response.json();

        setStatus(message);

        reset();
        setSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" {...register('name', { required: true })} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register('email', { required: true })} />

            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" {...register('message', { required: true })} />

            <button type="submit" disabled={submitting}>
                Enviar
            </button>

            {status && <p>{status}</p>}
        </form>
    );
}
