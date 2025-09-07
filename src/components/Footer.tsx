export const Footer: React.FC = () => {
  return (
    <footer className="mt-10 w-full bg-neutral-800 border-t border-gray-700 text-gray-400 text-sm">
      <div className="max-w-md mx-auto px-6 py-6 flex flex-col gap-4 items-center text-center">
        {/* Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/trevtemba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-gray-200 transition"
          >
            Email
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700/50" />

        {/* Copy + credits */}
        <p className="text-xs">
          © {new Date().getFullYear()} Trevor Katemba. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
