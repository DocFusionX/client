import ChatInput from "./components/ChatInput";
import Header from "./components/Header";

export default function Home() {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 flex flex-col">
            <Header />

            <ChatInput />
        </div>
    );
}
