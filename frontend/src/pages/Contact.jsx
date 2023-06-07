import ContactForm from "../components/Contact/ContactForm";
import bgHome from "../assets/bg-home.jpg";

export default function Contact() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: `url(${bgHome}) no-repeat bottom center fixed`,
          backgroundSize: "cover",
          width: "50%",
          height: "80vh",
        }}
      />
      <ContactForm />
    </div>
  );
}
