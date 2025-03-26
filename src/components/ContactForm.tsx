import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.nome,
            email: formData.email,
            phone: formData.telefono,
            message: formData.messaggio,
          },
        ]);

      if (error) throw error;

      toast.success('Messaggio inviato con successo!');
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        messaggio: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Errore nell\'invio del messaggio. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-secondary-700">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            required
            className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            value={formData.nome}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-secondary-700">
            Telefono
          </label>
          <input
            type="tel"
            name="telefono"
            id="telefono"
            className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            value={formData.telefono}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="messaggio" className="block text-sm font-medium text-secondary-700">
            Messaggio
          </label>
          <textarea
            name="messaggio"
            id="messaggio"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            value={formData.messaggio}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary-600 text-white py-2 px-4 rounded-md transition-colors duration-200 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-700'
          }`}
        >
          {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
        </button>
      </form>
    </>
  );
};

export default ContactForm;