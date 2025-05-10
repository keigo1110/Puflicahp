export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-75 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Puflica. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="https://4zigenhp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            4ZIGEN
          </a>
        </div>
      </div>
    </footer>
  )
}

