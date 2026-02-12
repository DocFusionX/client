import ReactMarkdown from "react-markdown";
import { Bot } from "lucide-react";
import type { Message } from "../../types";

interface ChatContentProps {
    messages: Message[];
    isLoading: boolean;
}

export default function ChatContent({ messages, isLoading }: ChatContentProps) {
    if (messages.length === 0) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 py-20">
                <p>Upload a document to start chatting.</p>
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto pb-32 space-y-8 pt-6">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex gap-3 ${
                        message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                    }`}
                >
                    {message.role === "assistant" && (
                        <div className="mt-1 shrink-0">
                            <div className="p-1.5 rounded-full bg-zinc-100 text-zinc-600">
                                <Bot className="size-4" />
                            </div>
                        </div>
                    )}

                    <div
                        className={`max-w-[85%] text-sm leading-relaxed ${
                            message.role === "user"
                                ? "bg-zinc-100 text-zinc-900 px-4 py-2.5 rounded-2xl rounded-tr-sm"
                                : "text-zinc-800 prose prose-sm prose-zinc max-w-none pt-1"
                        }`}
                    >
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex gap-3 justify-start">
                    <div className="mt-1 shrink-0">
                        <div className="p-1.5 rounded-full bg-zinc-100 text-zinc-600">
                            <Bot className="size-4" />
                        </div>
                    </div>
                    <div className="bg-transparent pt-2 text-sm text-gray-400 animate-pulse">
                        Thinking...
                    </div>
                </div>
            )}
        </div>
    );
}
