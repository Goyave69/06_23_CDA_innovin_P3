import ContactForm from "../components/Contact/ContactForm";
import bgHome from "../assets/bg-home.jpg";
import ContactInformation from "../components/Contact/ContactInformation";

export default function Contact() {
  return (
    <div
      style={{
        background: `url(${bgHome}) no-repeat center center fixed`,
        backgroundSize: "cover",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ContactInformation />
      <ContactForm />
    </div>
  );
}
