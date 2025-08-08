export default function Footer() {
    return (
        <footer className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center">
            <p className="text-center text-gray-600">
                &copy; {new Date().getFullYear()} B is For Boca Grande. All rights reserved.
            </p>
        </div>
        </footer>
    )
}