import { Field } from "../ui/field";
import { Input } from "../ui/input";
import { ArrowUp } from "lucide-react";
import FileUploadButton from "../FileUploadButton";
import { useState } from "react";
import type { KeyboardEvent } from "react";

interface ChatInputProps {
    onSend: (message: string) => void;
    onUpload: (file: File) => void;
    disabled?: boolean;
}

export default function ChatInput({
    onSend,
    onUpload,
    disabled,
}: ChatInputProps) {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-white bg-opacity-90 backdrop-blur-sm border-t border-gray-200">
            <div className="flex items-center gap-2">
                <FileUploadButton onUpload={onUpload} isLoading={disabled} />
                <Field className="flex-1">
                    <Input
                        id="input-field-chat"
                        type="text"
                        placeholder="Enter your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={disabled}
                    />
                </Field>
                <div
                    onClick={handleSend}
                    className={`p-1.5 rounded-full cursor-pointer transition-colors ${
                        message.trim()
                            ? "bg-gray-900 hover:bg-gray-800"
                            : "bg-gray-300 pointer-events-none"
                    }`}
                >
                    <ArrowUp className="text-white size-5" />
                </div>
            </div>
        </div>
    );
}
