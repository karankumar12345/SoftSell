import { useEffect } from 'react';
import './App.css'
import Header from '../../softsell/src/components/Header'
import { ThemeProvider } from '../../softsell/src/contexts/ThemeContent'
import HeroSection from '../../softsell/src/components/HeroSection';
import HowItWorks from '../../softsell/src/components/HowItWorks';
import Testimonials from '../../softsell/src/components/Testimonials';
import WhyChooseUs from '../../softsell/src/components/WhyChooseUs';
import ContactForm from '../../softsell/src/components/ContactForm';
import Footer from '../../softsell/src/components/Footer';
import ChatWidget from '../../softsell/src/components/ChatWidget';

function App() {

  useEffect(() => {
    document.title = 'SoftSell - Maximize the Value of Your Unused Software Licenses';
    
    // Add meta tags
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'SoftSell helps companies recover value from unused software licenses. Fast, secure, and profitable license reselling.';
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'software resale, license reselling, software license value, sell unused licenses';
    document.head.appendChild(metaKeywords);

    // Clean up on unmount
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
          <Header />
     <main>
           <HeroSection/>
          <HowItWorks/>
          <WhyChooseUs/>
          <Testimonials/>
          <ContactForm/>
     </main>
        
        <Footer/>
        <ChatWidget/>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
