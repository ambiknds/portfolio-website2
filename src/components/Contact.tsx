import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Implement form submission logic here
    console.log(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500"
            />
            {errors.name && (
              <p className="mt-1 text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && (
              <p className="mt-1 text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500"
            />
            {errors.message && (
              <p className="mt-1 text-red-500">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}