function HomePage() {
    return (
        <div className="bg-surface-2 flex h-screen items-center justify-center">
            <div className="bg-surface-1 z-1 flex h-48 w-lg flex-col justify-center gap-6 rounded-2xl p-12 text-center shadow-2xl">
                <h1 className="text-brand-primary text-2xl font-bold">
                    👋 Welcome to DeepDive!
                </h1>
                <p className="text-foreground-2 italic">
                    This website is currently still under construction and is
                    actively being worked on. Check back soon for more!
                </p>
            </div>
        </div>
    );
}

export default HomePage;
