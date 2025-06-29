import { FaUsers } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-center">
      <div className="flex flex-col items-center gap-4">
        <FaUsers className="text-4xl text-primary" />
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="max-w-2xl text-lg text-gray-400">
          We are a passionate team committed to delivering high-quality digital solutions. Our goal is to create impactful user experiences and build innovative tools that solve real-world problems.
        </p>
      </div>
    </section>
  );
}
