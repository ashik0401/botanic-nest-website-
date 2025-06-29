import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 rounded-xl shadow-md bg-base-200">
          <FaEnvelope className="text-3xl text-primary mb-2 mx-auto" />
          <h4 className="text-xl font-semibold">Email</h4>
          <p className="text-gray-400">support@example.com</p>
        </div>
        <div className="p-6 rounded-xl shadow-md bg-base-200">
          <FaPhoneAlt className="text-3xl text-primary mb-2 mx-auto" />
          <h4 className="text-xl font-semibold">Phone</h4>
          <p className="text-gray-400">+880 1234 567 890</p>
        </div>
        <div className="p-6 rounded-xl shadow-md bg-base-200">
          <FaMapMarkerAlt className="text-3xl text-primary mb-2 mx-auto" />
          <h4 className="text-xl font-semibold">Location</h4>
          <p className="text-gray-400">Rajshahi, Bangladesh</p>
        </div>
      </div>
    </section>
  );
}
