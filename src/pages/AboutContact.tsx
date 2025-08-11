import Header from "@/components/Header";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const AboutContact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AboutContact;


