import { useEffect } from 'react';
import './App.css'
import { ThemeProvider } from './contexts/ThemeContent';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';


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
