import React, { useState, useRef } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { Users, Check, Upload } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';

// Allowed file types
const ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  cv?: File;
}

const LavoraConNoiPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return 'Il file deve essere in formato PDF, DOC o DOCX';
    }
    if (file.size > MAX_FILE_SIZE) {
      return 'Il file non può superare i 5MB';
    }
    return null;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const error = validateFile(file);
    if (error) {
      toast.error(error);
      e.target.value = '';
      return;
    }

    setFormData(prev => ({ ...prev, cv: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      let cvUrl = '';
      let cvFilename = '';

      // Upload CV if provided
      if (formData.cv) {
        const fileExt = formData.cv.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;

        const { error: uploadError, data } = await supabase.storage
          .from('cvs')
          .upload(fileName, formData.cv, {
            onUploadProgress: (progress) => {
              setUploadProgress((progress.loaded / progress.total) * 100);
            },
          });

        if (uploadError) throw uploadError;

        // Get the public URL
        const { data: { publicUrl } } = supabase.storage
          .from('cvs')
          .getPublicUrl(fileName);

        cvUrl = publicUrl;
        cvFilename = formData.cv.name;
      }

      // Save application data
      const { error } = await supabase
        .from('job_applications')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            cv_url: cvUrl || null,
            cv_filename: cvFilename || null,
          },
        ]);

      if (error) throw error;

      toast.success('Candidatura inviata con successo!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Errore nell\'invio della candidatura. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    "Ambiente di lavoro stimolante e dinamico",
    "Formazione continua",
    "Crescita professionale",
    "Team giovane e motivato",
    "Flessibilità oraria"
  ];

  return (
    <ServiceLayout
      title="Lavora con noi"
      description="Entra a far parte del nostro team di professionisti dell'insegnamento. Cerchiamo persone motivate e appassionate."
      breadcrumbItems={[
        { label: 'Lavora con noi', href: '/lavora-con-noi' }
      ]}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-secondary-800 mb-6 flex items-center">
            <Users className="w-8 h-8 text-primary-600 mr-3" />
            Lavora con noi
          </h1>
          
          <div className="prose max-w-none text-secondary-600">
            <p className="text-lg mb-4">
              Ti appassiona l'insegnamento? Vuoi far parte di un team dinamico e in crescita? Il Centro Studi Il Sapere è sempre alla ricerca di talenti motivati e competenti per ampliare il proprio organico.
            </p>

            <p className="mb-4">
              Cerchiamo professionisti dell'insegnamento che condividano la nostra passione per la formazione e l'educazione. Se hai la passione per l'insegnamento, sei paziente, motivato e hai voglia di crescere professionalmente, questo è il posto giusto per te.
            </p>

            <p className="mb-4">
              Offriamo un ambiente stimolante, possibilità di crescita professionale e l'opportunità di far parte di un progetto educativo innovativo e in continua evoluzione.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Perché lavorare con noi</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-secondary-600">
                  <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-6">Candidati</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-secondary-700">
                  Nome
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={formData.fullName}
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
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700">
                  Telefono
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="cv" className="block text-sm font-medium text-secondary-700">
                  Curriculum Vitae (PDF, DOC, DOCX - max 5MB)
                </label>
                <div className="mt-1 flex items-center">
                  <label
                    htmlFor="cv"
                    className={`flex items-center justify-center px-4 py-2 border border-secondary-300 rounded-md shadow-sm text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    }`}
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Carica CV
                  </label>
                  <input
                    type="file"
                    name="cv"
                    id="cv"
                    ref={fileInputRef}
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="sr-only"
                    disabled={isSubmitting}
                  />
                  {formData.cv && (
                    <span className="ml-3 text-sm text-secondary-600">
                      {formData.cv.name}
                    </span>
                  )}
                </div>
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div className="mt-2">
                    <div className="bg-secondary-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700">
                  Messaggio
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Raccontaci di te, della tua esperienza e perché vorresti lavorare con noi"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary-600 text-white py-2 px-4 rounded-md transition-colors duration-200 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-700'
                }`}
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia Candidatura'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </ServiceLayout>
  );
};

export default LavoraConNoiPage;