import { Paperclip, Loader2 } from "lucide-react";
import type { ChangeEvent } from "react";

interface FileUploadButtonProps {
    onUpload: (file: File) => void;
    isLoading?: boolean;
}

export default function FileUploadButton({
    onUpload,
    isLoading,
}: FileUploadButtonProps) {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onUpload(file);
        }
        e.target.value = "";
    };

    if (isLoading) {
        return (
            <div className="p-1.5 rounded-full text-gray-400">
                <Loader2 className="size-5 animate-spin" />
            </div>
        );
    }

    return (
        <label className="p-1.5 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500 hover:text-gray-900 transition-colors">
            <input
                type="file"
                className="hidden"
                accept=".pdf,.txt"
                onChange={handleFileChange}
                disabled={isLoading}
            />
            <Paperclip className="size-5" />
        </label>
    );
}
