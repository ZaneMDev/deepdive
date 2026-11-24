import backgroundImage from '../assets/background.png';

function LoginPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <img
                src={backgroundImage}
                alt="Underwater landing page background"
                className="pointer-events-none absolute inset-0 size-full object-cover select-none"
            />

            <div className="bg-surface-1 absolute flex w-lg flex-col justify-center rounded-3xl p-12 shadow-2xl">
                <h1 className="text-foreground-1 mb-4 text-center text-4xl font-semibold">
                    Login
                </h1>

                <form action="" className="flex flex-col gap-8">
                    <div className="text-foreground-2 flex flex-col gap-1">
                        <label htmlFor="email" className="text-lg">
                            Email:
                        </label>
                        <input
                            type="email"
                            className="placeholder:text-foreground-3 focus:border-foreground-1 block w-full rounded-full border px-4 py-2 outline-none placeholder:text-sm"
                            id="email"
                            placeholder="Enter your email..."
                        />
                    </div>

                    <div className="text-foreground-2 flex flex-col gap-1">
                        <label htmlFor="password" className="text-lg">
                            Password:
                        </label>
                        <input
                            type="password"
                            className="placeholder:text-foreground-3 border-foreground-2 focus:border-foreground-1 block w-full rounded-full border px-4 py-2 outline-none placeholder:text-sm"
                            id="password"
                            placeholder="Enter your password..."
                        />
                    </div>

                    <button className="bg-brand-primary mt-4 cursor-pointer rounded-full p-4 font-semibold text-white">
                        Login
                    </button>
                </form>

                <p className="text-foreground-2 pt-8 text-center">
                    Don't have an account?
                    <a href="#" className="ml-1 text-[#0080ff]">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
