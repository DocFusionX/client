import Logo from "@/assets/logo.svg?react";
import { Trash2 } from "lucide-react";

interface HeaderProps {
    onClear: () => void;
}

export default function Header({ onClear }: HeaderProps) {
    return (
        <div className="w-full flex py-6 items-center justify-between gap-4">
            <Logo className="h-4 w-auto" />
            <div className="h-px w-full bg-linear-to-r from-blue-700 to-green-600" />
            <button
                onClick={onClear}
                className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-red-600 transition-colors"
                title="Clear Chat"
            >
                <Trash2 className="size-5" />
            </button>
        </div>
    );
}
