import Logo from "@/assets/logo.svg?react";
import { SquarePen, Trash } from "lucide-react";

interface HeaderProps {
    onClear: () => void;
    onDelete: () => void;
}

export default function Header({ onClear, onDelete }: HeaderProps) {
    return (
        <div className="w-full flex py-6 items-center justify-between gap-3">
            <Logo className="h-4 w-auto" />
            <div className="h-px w-full bg-gray-500" />
            <div className="flex items-center gap-1">
                <button
                    onClick={onClear}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
                    title="Clear Chat"
                >
                    <SquarePen className="size-4" />
                </button>
                <button
                    onClick={onDelete}
                    className="p-2 rounded-full hover:bg-gray-100 hover:text-red-600 text-gray-500 transition-colors cursor-pointer"
                    title="Delete Data"
                >
                    <Trash className="size-4" />
                </button>
            </div>
        </div>
    );
}
