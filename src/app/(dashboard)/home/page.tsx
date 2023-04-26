export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-6xl font-bold text-center text-white">
                Welcome to the dashboard!
            </h1>
            <p className="text-2xl text-center text-white">
                This is a protected route.
            </p>
        </div>
    );
}