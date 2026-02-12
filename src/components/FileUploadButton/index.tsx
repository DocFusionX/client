import { Paperclip } from "lucide-react";

export default function FileUploadButton() {
    return (
        <label className="p-1.5 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500 hover:text-gray-900 transition-colors">
            <input type="file" className="hidden" accept=".pdf,.txt" />
            <Paperclip className="size-5" />
        </label>
    );
}
