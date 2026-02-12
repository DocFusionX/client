import ReactMarkdown from "react-markdown";
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
        <div className="flex-1 overflow-y-auto pb-32 space-y-6 pt-4">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex ${
                        message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                    }`}
                >
                    <div
                        className={`max-w-[80%] rounded-lg p-4 prose prose-sm ${
                            message.role === "user"
                                ? "bg-gray-900 text-white prose-invert"
                                : "bg-gray-100 text-gray-900"
                        }`}
                    >
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-4 text-gray-500 animate-pulse">
                        Thinking...
                    </div>
                </div>
            )}
        </div>
    );
}
