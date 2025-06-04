import { useState } from "react";
export default function Input({ id, name, type, placeholder, label, required, value = '' }) {
    const [val, setValue] = useState(value);

    return (
        <div className="flex flex-col gap-1">
            <label
                className="text-sm font-bold text-nowrap"
                htmlFor={id}
            >
                {label}
                {required ? <sup className="text-red-700"> *</sup> : null}
            </label>
            {
                type !== 'textarea' ?
                    <input
                        className="w-full bg-background px-4 py-1.5 rounded-md text-sm"
                        id={id}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        value={val}
                        onChange={(e) => setValue(e.target.value)}
                    /> :
                    <textarea
                        className="w-full bg-background px-4 py-1.5 rounded-md text-sm"
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        value={val}
                        onChange={(e) => setValue(e.target.value)}
                        rows={4}
                    />
            }
        </div>
    )
}