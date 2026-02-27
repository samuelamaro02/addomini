import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Header.module.scss';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#port', label: 'Portfólio' },
  { href: '#depoimento', label: 'Depoimentos' },
  { href: '#sobre', label: 'Sobre' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Ensure mobile menu closes smoothly

    const target = document.querySelector(targetId);
    if (!target) return;

    // Dynamically calculate header height for offset
    const header = document.querySelector('header');
    const headerOffset = header ? header.getBoundingClientRect().height : 80;

    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition - headerOffset;
    const duration = 800; // 800ms for a very premium, weighted ease

    let start: number | null = null;

    // easeInOutCubic gives a very cinematic, senior-level smooth feel
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Ensure final position is exact
        window.scrollTo(0, startPosition + distance);
        // Optional: Update URL hash without jumping
        window.history.pushState(null, '', targetId);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => handleSmoothScroll(e, '#home')}
        >
          <img
            src="/images/Ativo-1-2.webp"
            alt="AD Consultoria e Treinamento"
          />
        </a>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={28} color="#fff" /> : <FiMenu size={28} color="#fff" />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
