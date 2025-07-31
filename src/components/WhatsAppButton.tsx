import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show button after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Animate every 10 seconds to draw attention
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(animationInterval);
    };
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/5531984005700?text=Ol%C3%A1%21%20Vim%20da%20p%C3%A1gina%20do%20agente%20de%20IA%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es', '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop/Tablet Button */}
      <button
        onClick={handleClick}
        className={`
          fixed bottom-6 right-6 z-50 
          bg-green-500 hover:bg-green-600 
          text-white p-4 rounded-full 
          shadow-lg hover:shadow-xl 
          transition-all duration-300 
          transform hover:scale-110
          hidden sm:flex items-center gap-3
          ${isAnimating ? 'animate-bounce' : ''}
        `}
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-medium whitespace-nowrap">
          Falar com Especialista
        </span>
      </button>

      {/* Mobile Button */}
      <button
        onClick={handleClick}
        className={`
          fixed bottom-6 right-6 z-50 
          bg-green-500 hover:bg-green-600 
          text-white p-4 rounded-full 
          shadow-lg hover:shadow-xl 
          transition-all duration-300 
          transform hover:scale-110
          flex sm:hidden items-center justify-center
          ${isAnimating ? 'animate-bounce' : ''}
        `}
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Floating notification bubble */}
      <div className={`
        fixed bottom-20 right-6 z-40
        bg-white border border-border/20 rounded-lg shadow-lg
        p-3 max-w-xs
        transform transition-all duration-500 ease-out
        ${isVisible && !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        hidden sm:block
      `}>
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">GT Gestão Digital</p>
            <p className="text-xs text-muted-foreground">
              Olá! Como podemos ajudar você hoje?
            </p>
          </div>
        </div>
        
        {/* Speech bubble arrow */}
        <div className="absolute bottom-0 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
      </div>
    </>
  );
};

export default WhatsAppButton;