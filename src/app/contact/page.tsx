import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black">
      <div className="max-w-[300px] px-[40px] py-[30px] bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6">Send me an email</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
