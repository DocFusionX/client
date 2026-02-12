import Logo from "@/assets/logo.svg?react";

export default function Header() {
    return (
        <div className="w-full flex py-6 px-1 items-center justify-between gap-4">
            <Logo className="h-4 w-auto" />
            <div className="h-px w-full bg-linear-to-r from-blue-700 to-green-600" />
        </div>
    );
}
