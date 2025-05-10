import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, MinusSquare, Maximize2 } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const predefinedQuestions = [
  "How do I sell my license?",
  "What types of licenses do you accept?",
  "How long does the process take?",
  "Is the process secure?",
];

// Simulated responses for demo purposes
const getAIResponse = (message: string): string => {
  const responses: { [key: string]: string } = {
    "How do I sell my license?": "To sell your license, simply fill out our contact form with details about your software license. We'll review the information and get back to you within 24 hours with a valuation.",
    "What types of licenses do you accept?": "We accept licenses from major software providers including Microsoft, Adobe, Autodesk, Oracle, and SAP. Other enterprise software licenses may also be eligible.",
    "How long does the process take?": "The process is quick! We provide valuations within 24 hours, and once you accept our offer, payment is typically processed within 3-5 business days.",
    "Is the process secure?": "Yes, we use bank-level security protocols and secure escrow services to protect your assets and data throughout the entire transaction process.",
  };

  return responses[message] || "I can help you with questions about selling software licenses. For specific inquiries, please try one of the suggested questions or contact our support team.";
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

 const handleSendMessage = async (message: string) => {
  if (!message.trim()) return;

  const newMessages: Message[] = [
    ...messages,
    { role: 'user' as const, content: message },
  ];
  setMessages(newMessages);
  setInputMessage('');

  // Simulate AI response with slight delay
  setTimeout(() => {
    const aiResponse = getAIResponse(message);
    setMessages([...newMessages, { role: 'assistant' as const, content: aiResponse }]);
  }, 1000);
};

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isOpen ? 'w-80' : 'w-auto'}`}>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className={`bg-white rounded-lg shadow-xl ${isMinimized ? 'h-12' : 'h-[500px]'} flex flex-col transition-all duration-300`}>
          <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <span className="font-semibold">Chat Support</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:text-gray-200 transition-colors"
                aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
              >
                {isMinimized ? <Maximize2 className="w-5 h-5" /> : <MinusSquare className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="space-y-4">
                    <p className="text-gray-600">Hello! How can I help you today? Here are some common questions:</p>
                    <div className="space-y-2">
                      {predefinedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuestionClick(question)}
                          className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(inputMessage);
                  }}
                  className="flex space-x-2"
                >
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;