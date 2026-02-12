import { Field } from "../ui/field";
import { Input } from "../ui/input";
import { ArrowUp } from "lucide-react";

export default function ChatInput() {
    return (
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
    );
}
