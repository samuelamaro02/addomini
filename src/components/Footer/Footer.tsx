import { FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.scss';

const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#port', label: 'Portfólio' },
    { href: '#depoimento', label: 'Depoimentos' },
    { href: '#sobre', label: 'Sobre' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.branding}>
                    <img
                        src="/images/Ativo-1-2.webp"
                        alt="AD Consultoria e Treinamento"
                        className={styles.logo}
                    />
                    <p className={styles.description}>
                        Na Anno Domini Consultoria e Treinamento, unimos estratégia e personalização
                        para impulsionar empresas. Com uma abordagem ágil, ajudamos a transformar
                        desafios em crescimento real e sustentável.
                    </p>
                </div>

                <div className={styles.links}>
                    <h3 className={styles.title}>Links Rápidos</h3>
                    <ul className={styles.list}>
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.social}>
                    <h3 className={styles.title}>Redes Sociais</h3>
                    <ul className={styles.list}>
                        <li>
                            <a
                                href="https://www.instagram.com/adconsultoriae/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                            >
                                <FaInstagram size={20} />
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h3 className={styles.title}>Contato</h3>
                    <ul className={styles.contactList}>
                        <li>
                            <span className={styles.icon}>
                                <FaPhoneAlt size={16} />
                            </span>
                            <span>(83) 98899-0673</span>
                        </li>
                        <li>
                            <span className={styles.icon}>
                                <FaEnvelope size={16} />
                            </span>
                            <span>danielevianacarvalho@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
