import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  User,
  Bot,
  Loader2
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hi there! 👋 Welcome to MarketPro. How can I help you today?",
    sender: "bot",
    timestamp: new Date()
  }
];

const quickReplies = [
  "I want to sell on Amazon",
  "Tell me about your services",
  "Pricing information",
  "Schedule a consultation"
];

const botResponses: Record<string, string> = {
  "i want to sell on amazon": "Great choice! Amazon is the world's largest marketplace. We can help you set up your seller account, optimize listings, and manage fulfillment. Would you like to schedule a free consultation with our Amazon experts?",
  "tell me about your services": "We offer comprehensive marketplace services including:\n\n• Company Formation - Set up your US business entity\n• Fulfillment & Logistics - End-to-end order management\n• Performance Marketing - PPC and brand awareness campaigns\n\nWhich service interests you most?",
  "pricing information": "Our pricing is customized based on your needs. We offer flexible packages starting from $999/month for basic marketplace management. For a detailed quote, would you like to schedule a call with our team?",
  "schedule a consultation": "I'd be happy to help you schedule a consultation! You can book directly through our calendar, or leave your email and our team will reach out within 24 hours. What works best for you?",
  "default": "Thanks for your message! One of our marketplace specialists will get back to you shortly. In the meantime, is there anything specific I can help you with?"
};

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const getBotResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== "default" && lowercaseMessage.includes(key)) {
        return response;
      }
    }
    return botResponses.default;
  };

  const handleSend = async (message?: string) => {
    const content = message || inputValue.trim();
    if (!content) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: getBotResponse(content),
      sender: "bot",
      timestamp: new Date()
    };

    setIsTyping(false);
    setMessages(prev => [...prev, botMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">Chat with us</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "auto" : "500px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">MarketPro Support</h4>
                  <p className="text-xs text-primary-foreground/70">Usually replies instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat Body */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="flex-1 flex flex-col overflow-hidden"
                >
                  {/* Messages */}
                  <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex gap-2 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            message.sender === "user" 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted"
                          }`}>
                            {message.sender === "user" ? (
                              <User className="w-4 h-4" />
                            ) : (
                              <Bot className="w-4 h-4" />
                            )}
                          </div>
                          <div className={`max-w-[75%] ${message.sender === "user" ? "text-right" : ""}`}>
                            <div className={`px-4 py-2 rounded-2xl text-sm whitespace-pre-line ${
                              message.sender === "user"
                                ? "bg-primary text-primary-foreground rounded-br-md"
                                : "bg-muted text-foreground rounded-bl-md"
                            }`}>
                              {message.content}
                            </div>
                            <span className="text-[10px] text-muted-foreground mt-1 block">
                              {formatTime(message.timestamp)}
                            </span>
                          </div>
                        </motion.div>
                      ))}

                      {/* Typing Indicator */}
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex gap-2"
                        >
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            <Bot className="w-4 h-4" />
                          </div>
                          <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md">
                            <div className="flex gap-1">
                              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </ScrollArea>

                  {/* Quick Replies */}
                  {messages.length <= 2 && (
                    <div className="px-4 pb-3">
                      <div className="flex flex-wrap gap-2">
                        {quickReplies.map((reply) => (
                          <button
                            key={reply}
                            onClick={() => handleSend(reply)}
                            className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-3 border-t border-border bg-background">
                    <div className="flex gap-2">
                      <Input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 rounded-full bg-muted border-0 focus-visible:ring-1"
                        disabled={isTyping}
                      />
                      <Button
                        size="icon"
                        className="rounded-full shrink-0"
                        onClick={() => handleSend()}
                        disabled={!inputValue.trim() || isTyping}
                      >
                        {isTyping ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-[10px] text-center text-muted-foreground mt-2">
                      Powered by MarketPro AI • Available 24/7
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
