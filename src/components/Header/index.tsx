import Logo from "@/assets/logo.svg?react";

export default function Header() {
    return (
        <div className="w-full flex py-6 px-6 items-center justify-between">
            <Logo className="h-6 w-auto" />
        </div>
    );
}
