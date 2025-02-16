
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className=" text-white py-12 px-4">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="text-2xl font-bold text-yellow-400">Skip IT</div>

        <nav className="flex gap-8">
          <Link href="#" className="text-sm hover:text-yellow-400 transition-colors">
            Terms & Conditions
          </Link>
          <Link href="#" className="text-sm hover:text-yellow-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:text-yellow-400 transition-colors">
            Careers
          </Link>
        </nav>

        <div className="text-sm text-gray-400">© {new Date().getFullYear()}. All rights reserved</div>
      </div>
    </footer>
  )
}

