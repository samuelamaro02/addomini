import { FaShareAlt, FaUserFriends } from 'react-icons/fa';
import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Criamos soluções exclusivas para o DNA do seu negócio
                    </h1>
                    <p className={styles.description}>
                        Na AD Consultoria e Treinamento, desenvolvemos estratégias personalizadas
                        para impulsionar o crescimento, a eficiência e o sucesso do seu negócio.
                    </p>
                    <a
                        href="https://api.whatsapp.com/send/?phone=5583988990673&text=Quero+entender+mais+da+consultoria+Anno+Domini.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn--primary ${styles.cta}`}
                    >
                        ENTRAR EM CONTATO
                    </a>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <FaShareAlt className={styles.statIcon} color="#F7951E" size={40} />
                            <div className={styles.statText}>
                                <span className={styles.statNumber}>+16</span>
                                <span className={styles.statLabel}>Anos de Experiência</span>
                            </div>
                        </div>
                        <div className={styles.statItem}>
                            <FaUserFriends className={styles.statIcon} color="#F7951E" size={40} />
                            <div className={styles.statText}>
                                <span className={styles.statNumber}>50+</span>
                                <span className={styles.statLabel}>Clientes</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.images}>
                    <div className={styles.imageTop}>
                        <div
                            className={styles.imagePlaceholder}
                            style={{ backgroundImage: 'url(/images/Hero-Image.webp)' }}
                        />
                    </div>
                    <div className={styles.imageRow}>
                        <div
                            className={styles.imagePlaceholder}
                            style={{ backgroundImage: 'url(/images/image.webp)' }}
                        />
                        <div
                            className={styles.imagePlaceholder}
                            style={{ backgroundImage: 'url(/images/image-1.webp)' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
