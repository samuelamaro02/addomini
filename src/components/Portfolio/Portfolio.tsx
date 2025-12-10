import { useState, useEffect } from 'react';
import styles from './Portfolio.module.scss';

const clients = [
    {
        image: '/images/image-3.webp',
        alt: 'Cliente 1'
    },
    {
        image: '/images/group_4.webp',
        alt: 'Cliente 2'
    },
    {
        image: '/images/image-removebg-preview3-1.webp',
        alt: 'Cliente 3'
    },
    {
        image: '/images/LOGO-SOFTCOM-PRETO-1-1024x72454-1.webp',
        alt: 'Cliente 4'
    },
    {
        image: '/images/group_1.webp',
        alt: 'Cliente 5'
    }
];

export default function Portfolio() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => {
                const maxSlide = Math.max(0, clients.length - slidesToShow);
                return prev >= maxSlide ? 0 : prev + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [slidesToShow]);

    return (
        <section id="port" className={styles.portfolio}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.subtitle}>Portifólio</span>
                    <h2 className={styles.title}>Clientes que trabalhamos juntos</h2>
                </div>

                <div className={styles.carouselWrapper}>
                    <div className={styles.carousel}>
                        <div
                            className={styles.carouselTrack}
                            style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
                        >
                            {clients.map((client, index) => (
                                <div key={index} className={styles.slide}>
                                    <img src={client.image} alt={client.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
