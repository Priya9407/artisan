'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg> },
  { name: 'About', href: '/about', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
  { name: 'For Artists', href: '/for-artists', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg> },
  { name: 'Marketplace', href: '/marketplace', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg> }
];

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const activeItem = navItems.find(item => 
    pathname === item.href || (pathname === '/' && item.name === 'Home')
  )?.name || 'Home';

  // Check authentication status
  const checkAuthStatus = () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const userStr = localStorage.getItem('user');
      
      if (authToken && userStr) {
        const userData = JSON.parse(userStr);
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Check auth status on mount and set up storage listener
    checkAuthStatus();
    
    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'authToken' || e.key === 'user') {
        checkAuthStatus();
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('storage', handleStorageChange);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isMenuOpen]);

  // Listen for auth changes from within the same tab
  useEffect(() => {
    const interval = setInterval(checkAuthStatus, 1000); // Check every second
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    setShowUserMenu(false);
    router.push('/');
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b border-stone-200/60 dark:border-neutral-800/60 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-neutral-950/95 py-3' : 'bg-white/90 dark:bg-neutral-950/90 py-4'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <div>
              <div className="text-xl font-extrabold text-neutral-900 dark:text-neutral-50">Artisans Marketplace</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">Discover • Create • Connect</div>
            </div>
          </Link>

          {/* Desktop Navigation with Icons */}
          <nav className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-3 font-semibold rounded-2xl transition-all duration-300 no-underline ${
                  activeItem === item.name
                    ? 'text-primary bg-primary/10 border border-primary/20'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-stone-50 dark:hover:bg-neutral-900'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={toggleDarkMode} 
              className="p-3 hover:bg-stone-50 dark:hover:bg-neutral-900 rounded-2xl transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? 
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg> :
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              }
            </button>
            
            {/* Conditional Authentication Controls */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-4 py-3 font-semibold rounded-2xl hover:bg-stone-50 dark:hover:bg-neutral-900 transition-all duration-300 text-neutral-700 dark:text-neutral-300"
                >
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {user ? getInitials(user.name) : 'U'}
                  </div>
                  <span className="hidden lg:block">{user?.name || 'User'}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-stone-200/60 dark:border-neutral-800/60 py-2 z-50">
                    <div className="px-4 py-3 border-b border-stone-200 dark:border-neutral-800">
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">{user?.name}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{user?.email}</p>
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg mt-1 capitalize">
                        {user?.role || 'Artist'}
                      </span>
                    </div>
                    <div className="py-2">
                      <Link
                        href="/for-artists"
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center gap-3 px-4 py-3 text-neutral-700 dark:text-neutral-300 hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors no-underline"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                        </svg>
                        Artist Studio
                      </Link>
                      <Link
                        href="/marketplace"
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center gap-3 px-4 py-3 text-neutral-700 dark:text-neutral-300 hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors no-underline"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                        </svg>
                        Marketplace
                      </Link>
                      <Link
                        href="/profile"
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center gap-3 px-4 py-3 text-neutral-700 dark:text-neutral-300 hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors no-underline"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        Profile
                      </Link>
                      <div className="border-t border-stone-200 dark:border-neutral-800 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors text-left"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link 
                  href="/auth"
                  className="flex items-center gap-2 px-4 py-3 font-semibold rounded-2xl hover:bg-stone-50 dark:hover:bg-neutral-900 transition-all duration-300 text-neutral-700 dark:text-neutral-300 no-underline"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  Sign In
                </Link>
                <Link 
                  href="/marketplace"
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] no-underline"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                  Shop Now
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 rounded-2xl hover:bg-stone-50 dark:hover:bg-neutral-900 z-50 transition-all duration-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 space-y-1.5">
              <div className={`h-0.5 bg-neutral-700 dark:bg-neutral-300 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`h-0.5 bg-neutral-700 dark:bg-neutral-300 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 bg-neutral-700 dark:bg-neutral-300 rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      <div className="h-20"></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white dark:bg-neutral-950">
          <div className="flex flex-col h-full">
            
            <div className="flex items-center justify-between p-6 border-b border-stone-200 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-neutral-900 dark:text-neutral-100">Artisans Marketplace</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">Navigate</div>
                </div>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-2 hover:bg-stone-50 dark:hover:bg-neutral-900 rounded-2xl transition-all duration-300"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* User Info Section for Mobile */}
            {isAuthenticated && user && (
              <div className="px-6 py-4 bg-stone-50 dark:bg-neutral-900 border-b border-stone-200 dark:border-neutral-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {getInitials(user.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">{user.name}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{user.email}</p>
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary hover:bg-stone-100 dark:hover:bg-neutral-800 rounded-xl transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            )}

            <div className="flex-1 px-6 pt-8">
              <nav className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-4 px-6 py-5 rounded-3xl font-bold text-xl transition-all duration-300 no-underline ${
                      activeItem === item.name
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-neutral-900 dark:text-neutral-100 hover:text-primary hover:bg-stone-50 dark:hover:bg-neutral-900'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="px-6 pb-8 space-y-4 border-t border-stone-200 dark:border-neutral-800 pt-6">
              <div className="flex items-center justify-between p-4 bg-stone-50 dark:bg-neutral-900 rounded-3xl">
                <div className="flex items-center gap-3">
                  {isDark ? 
                    <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg> :
                    <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                  }
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
                </div>
                <button 
                  onClick={toggleDarkMode} 
                  className={`w-12 h-6 rounded-full transition-all duration-300 ${isDark ? 'bg-primary' : 'bg-stone-300 dark:bg-neutral-700'}`}
                  aria-label="Toggle dark mode"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-all duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="space-y-3">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-3 py-4 font-semibold bg-red-100 hover:bg-red-200 dark:bg-red-950/30 dark:hover:bg-red-950/50 text-red-700 dark:text-red-400 rounded-3xl transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    <span>Sign Out</span>
                  </button>
                ) : (
                  <>
                    <Link 
                      href="/auth"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-3 py-4 font-semibold bg-stone-100 hover:bg-stone-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-3xl transition-all duration-300 no-underline"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      <span>Sign In</span>
                    </Link>
                    <Link 
                      href="/marketplace"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-3xl transition-all duration-300 no-underline"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                      </svg>
                      <span>Shop Now</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
