import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <div className="flex">
      <div className="bg-bgHome bg-center bg-no-repeat object-fill bg-cover w-full md:w-1/2 h-[90vh]" />
      <ContactForm />
    </div>
  );
}
