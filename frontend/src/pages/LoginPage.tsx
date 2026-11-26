import backgroundImage from '../assets/background.png';
import PasswordInput from '../components/PasswordInput';
import { Link } from 'react-router';

function LoginPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <img
                src={backgroundImage}
                alt="Underwater landing page background"
                className="pointer-events-none absolute inset-0 size-full object-cover select-none"
            />

            <div className="bg-surface-1 absolute flex w-lg flex-col justify-center rounded-3xl p-12 shadow-2xl">
                <h1 className="text-foreground-1 text-center text-4xl font-semibold">
                    Login
                </h1>

                <form
                    action=""
                    className="flex flex-col justify-around gap-8 py-12"
                    noValidate
                >
                    <input
                        type="email"
                        className="placeholder:text-foreground-3 text-foreground-2 focus:border-foreground-1 block w-full rounded-full border px-4 py-2 outline-none"
                        id="email"
                        placeholder="Email or username..."
                    />

                    <div className="flex flex-col gap-4">
                        <PasswordInput />

                        <a
                            href="#"
                            className="text-sm text-[#0080ff] dark:text-[#00c0ff]"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <button className="bg-brand-primary cursor-pointer rounded-full p-4 font-semibold text-white">
                        Login
                    </button>
                </form>

                <p className="text-foreground-2 text-center">
                    Don't have an account?
                    <Link
                        to="/signup"
                        className="ml-1 text-[#0080ff] dark:text-[#00c0ff]"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
