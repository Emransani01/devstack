const Footer = () => {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#home"
              className="gradient-text text-2xl font-extrabold tracking-tight"
            >
              DevStack
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Explore modern technologies and build the ideal development stack
              for your next project.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-600 transition hover:border-pink-300 hover:text-pink-500"
              >
                GH
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-600 transition hover:border-pink-300 hover:text-pink-500"
              >
                X
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-600 transition hover:border-pink-300 hover:text-pink-500"
              >
                in
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900">Product</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="transition hover:text-pink-500">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-pink-500"
                >
                  Your Stack
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900">Company</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="#about" className="transition hover:text-pink-500">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-pink-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#home" className="transition hover:text-pink-500">
                  Home
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900">Legal</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href="#privacy" className="transition hover:text-pink-500">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="transition hover:text-pink-500">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DevStack. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#privacy" className="transition hover:text-pink-500">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
