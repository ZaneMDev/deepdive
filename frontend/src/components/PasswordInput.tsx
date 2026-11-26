import { useState } from 'react';

export default function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative flex items-center">
            <input
                type={showPassword ? 'text' : 'password'}
                className="text-foreground-2 placeholder:text-foreground-3 border-foreground-2 focus:border-foreground-1 block w-full rounded-full border py-2 pr-12 pl-4 outline-none"
                id="password"
                placeholder="Password..."
            />

            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-foreground-2 absolute right-4 flex cursor-pointer items-center justify-center outline-none"
            >
                <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                </span>
            </button>
        </div>
    );
}
