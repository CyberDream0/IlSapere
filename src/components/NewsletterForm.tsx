import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error('Email già registrata alla newsletter.');
        } else {
          throw error;
        }
      } else {
        toast.success('Iscrizione completata con successo!');
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error('Errore durante l\'iscrizione. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="La tua email" 
          className="w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
          disabled={isSubmitting}
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary-600 text-white py-2 px-4 rounded-md transition-colors duration-200 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-700'
          }`}
        >
          {isSubmitting ? 'Iscrizione in corso...' : 'Iscriviti'}
        </button>
      </form>
    </>
  );
};

export default NewsletterForm;