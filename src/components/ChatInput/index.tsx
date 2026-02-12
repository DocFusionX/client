import { Field } from "../ui/field";
import { Input } from "../ui/input";
import { ArrowUp } from "lucide-react";

export default function ChatInput() {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-white bg-opacity-90 backdrop-blur-sm border-t border-gray-200">
            <div className="flex items-center gap-2">
                <Field>
                    <Input
                        id="input-field-chat"
                        type="text"
                        placeholder="Enter your message..."
                    />
                </Field>
                <div className="p-1.5 rounded-full bg-gray-900 hover:bg-gray-800 cursor-pointer">
                    <ArrowUp className="text-white size-5" />
                </div>
            </div>
        </div>
    );
}
