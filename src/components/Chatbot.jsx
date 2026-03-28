import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareText, X, Mic, Send, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'ai', text: 'Hi! I am Harikrishna\'s AI assistant. Feel free to ask me anything about his portfolio, skills, or experience!' }
    ]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    
    const messagesEndRef = useRef(null);
    const recognitionRef = useRef(null);

    // Auto scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    // Setup Speech Recognition
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-US';
            recognition.interimResults = false;

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
                handleSend(transcript);
            };

            recognition.onend = () => setIsListening(false);
            recognition.onerror = () => setIsListening(false);

            recognitionRef.current = recognition;
        }
    }, []);

    const speakText = (text) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1.0;
            window.speechSynthesis.speak(utterance);
        }
    };

    const toggleListen = () => {
        if (!recognitionRef.current) {
            alert("Microphone not supported in this browser.");
            return;
        }
        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        } else {
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    const handleSend = async (overrideText = null) => {
        const userText = overrideText || input;
        if (!userText.trim()) return;

        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setInput('');
        setIsTyping(true);

        try {
            const res = await axios.post('http://localhost:5000/api/chat', { message: userText });
            const aiReply = res.data.reply;
            setMessages(prev => [...prev, { role: 'ai', text: aiReply }]);
            speakText(aiReply);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', text: "I'm currently offline or unreachable. Please verify the backend is running!" }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-glow flex items-center justify-center transition-all ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <MessageSquareText size={24} />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[580px] flex flex-col glass-card rounded-3xl overflow-hidden shadow-2xl border border-glassBorder/70"
                    >
                        {/* Header */}
                        <div className="bg-surface/80 backdrop-blur-md p-5 border-b border-glassBorder flex flex-col shadow-sm relative z-10">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Bot size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white tracking-wide">AI Assistant</h3>
                                        <p className="text-xs text-primary/80 font-medium">Online</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => setIsOpen(false)} 
                                    className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Content */}
                        <div className="flex-1 p-5 overflow-y-auto flex flex-col space-y-4 bg-background/40">
                            {messages.map((msg, idx) => (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={idx} 
                                    className={`max-w-[85%] rounded-2xl p-4 text-sm font-medium leading-relaxed ${
                                        msg.role === 'user' 
                                            ? 'self-end bg-primary text-white rounded-br-sm shadow-glow' 
                                            : 'self-start bg-surface border border-glassBorder text-slate-200 rounded-bl-sm shadow-md'
                                    }`}
                                >
                                    {msg.text}
                                </motion.div>
                            ))}
                            
                            {isTyping && (
                                <div className="self-start bg-surface border border-glassBorder rounded-2xl p-4 rounded-bl-sm">
                                    <Loader2 size={18} className="text-primary animate-spin" />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-surface/80 backdrop-blur-md border-t border-glassBorder relative">
                            {/* Listening visual feedback */}
                            <AnimatePresence>
                                {isListening && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="absolute -top-10 left-0 right-0 flex justify-center pb-2 pointer-events-none"
                                    >
                                        <div className="bg-rose-500/20 text-rose-400 text-xs px-3 py-1 rounded-full border border-rose-500/20 flex items-center space-x-2 animate-pulse font-medium tracking-wider">
                                            <span className="relative flex h-2 w-2">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                                            </span>
                                            <span>Listening...</span>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                            <form 
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className={`flex items-center bg-background border rounded-full px-2 py-2 transition-all ${isListening ? 'border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.1)]' : 'border-glassBorder focus-within:border-primary/50'}`}
                            >
                                <button
                                    type="button"
                                    onClick={toggleListen}
                                    className={`p-2 rounded-full transition-colors flex-shrink-0 ${
                                        isListening ? 'bg-rose-500/20 text-rose-400' : 'text-slate-400 hover:text-white hover:bg-surfaceHover'
                                    }`}
                                >
                                    <Mic size={18} />
                                </button>
                                
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={isListening ? "Speak now..." : "Type a message..."}
                                    className="flex-1 bg-transparent border-none px-3 py-1 text-sm text-white placeholder-slate-500 focus:outline-none"
                                    autoComplete="off"
                                />
                                
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="p-2 bg-primary disabled:opacity-50 disabled:bg-surface text-white rounded-full flex-shrink-0 transition-colors"
                                >
                                    <Send size={16} className={`${input.trim() ? 'translate-x-[1px]' : ''}`} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
