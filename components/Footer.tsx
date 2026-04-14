import Link from 'next/link';

const footerLinks = {
  'Categories': [
    { name: 'Action', href: '/category/action' },
    { name: 'Racing', href: '/category/racing' },
    { name: 'Puzzle', href: '/category/puzzle' },
    { name: 'Shooting', href: '/category/shooting' },
    { name: 'Sports', href: '/category/sports' },
    { name: 'Adventure', href: '/category/adventure' },
  ],
  'Legal': [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
  'Quick Links': [
    { name: 'Trending Games', href: '/?sort=popular' },
    { name: 'New Games', href: '/?sort=new' },
    { name: 'Top Rated', href: '/?sort=rating' },
    { name: 'Favorites', href: '/favorites' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-800 border-t border-surface-600/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-neon-purple flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-lg font-bold gradient-text">GameVault</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Play thousands of free online games. Action, Racing, Puzzle and more — no downloads required!
            </p>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-surface-600/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} GameVault. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            All games are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
