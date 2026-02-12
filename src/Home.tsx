import { useState } from "react";
import ChatContent from "./components/ChatContent";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header";
import type { Message } from "./types";
import { uploadFile, queryRag, clearDatabase } from "./lib/api";

export default function Home() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleClear = async () => {
        const choice = confirm(
            "Clear chat UI and server database? (Cancel to clear only UI)",
        );

        if (choice) {
            try {
                await clearDatabase();
                setMessages([]);
            } catch (error) {
                console.error("Failed to clear database:", error);
                alert("Failed to clear server database. UI cleared.");
                setMessages([]);
            }
        } else {
            setMessages([]);
        }
    };

    const handleSend = async (text: string) => {
        setIsLoading(true);
        const userMessage: Message = { role: "user", content: text };
        setMessages((prev) => [...prev, userMessage]);

        try {
            const answer = await queryRag(text);
            const assistantMessage: Message = {
                role: "assistant",
                content: answer,
            };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Failed to query RAG:", error);
            const errorMessage: Message = {
                role: "assistant",
                content:
                    "Sorry, I encountered an error processing your request.",
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpload = async (file: File) => {
        setIsLoading(true);
        try {
            await uploadFile(file);
            const systemMessage: Message = {
                role: "assistant",
                content: `Successfully uploaded **${file.name}**.`,
            };
            setMessages((prev) => [...prev, systemMessage]);
        } catch (error) {
            console.error("Failed to upload file:", error);
            const errorMessage: Message = {
                role: "assistant",
                content: "Failed to upload file. Please try again.",
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full relative max-w-6xl mx-auto px-6 flex flex-col h-screen">
            <Header onClear={handleClear} />

            <ChatContent messages={messages} isLoading={isLoading} />

            <ChatInput
                onSend={handleSend}
                onUpload={handleUpload}
                disabled={isLoading}
            />
        </div>
    );
}
