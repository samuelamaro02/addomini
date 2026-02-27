import { useState, useEffect, useCallback } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './Testimonials.module.scss';

const testimonials = [
    {
        name: 'Viviane Carvalho',
        role: 'Diretora de Operações | Empresa Logística Express',
        text: 'Administradora, especialista em Finanças Empresariais e Gestão de Clínicas e Consultórios. Consultora Credenciada ao SEBRAE/PB, atua nas áreas de Processos, Atendimento ao cliente e Financeira, com foco na área da saúde.',
        image: '/images/Frame-1-2.webp',
        textColor: 'light',
        rating: 5
    },
    {
        name: 'Ricardo Almeida',
        role: 'Gerente de Recursos Humanos | TechSolutions',
        text: 'Graduado em Administração e Psicologia, é Mestre em Administração, consultor de empresas nas áreas de planejamento, avaliação, reestruturação e expansão organizacional e professor de Administração.',
        image: '/images/Frame-1-4.webp',
        textColor: 'dark',
        rating: 5
    }
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>★</span>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        setTouchEnd(null);
        if ('targetTouches' in e) {
            setTouchStart(e.targetTouches[0].clientX);
        } else {
            setIsDragging(true);
            setTouchStart((e as React.MouseEvent).clientX);
        }
    };

    const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        if ('targetTouches' in e) {
            setTouchEnd(e.targetTouches[0].clientX);
        } else if (isDragging) {
            setTouchEnd((e as React.MouseEvent).clientX);
        }
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }

        setIsDragging(false);
        setTouchStart(null);
        setTouchEnd(null);
    };

    // Calculate dynamic transform based on swipe
    let swipeOffset = 0;
    if (touchStart !== null && touchEnd !== null) {
        swipeOffset = touchStart - touchEnd;
    }

    return (
        <section id="depoimento" className={styles.testimonials}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Depoimentos</span>
                    <h2 className={styles.title}>
                        A voz de quem confia no <span className="highlight">nosso trabalho</span>
                    </h2>
                </div>

                <div className={styles.carouselWrapper}>
                    <button className={styles.prevBtn} onClick={prevSlide} aria-label="Previous">
                        ←
                    </button>

                    <div
                        className={styles.carousel}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onTouchStart}
                        onMouseMove={onTouchMove}
                        onMouseUp={onTouchEnd}
                        onMouseLeave={onTouchEnd}
                    >
                        <div
                            className={styles.carouselTrack}
                            style={{
                                transform: `translateX(calc(-${currentSlide * 100}% - ${swipeOffset}px))`,
                                transition: isDragging || (touchStart && touchEnd) ? 'none' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`${styles.slide} ${testimonial.textColor === 'light' ? styles.light : styles.dark}`}
                                    style={{ backgroundImage: `url(${testimonial.image})` }}
                                >
                                    <div className={styles.testimonialHeader}>
                                        <FaUserCircle
                                            className={styles.avatar}
                                            size={60}
                                            color={testimonial.textColor === 'light' ? '#FFFFFF' : '#1A2C64'}
                                        />
                                        <div className={styles.info}>
                                            <h3 className={styles.name}>{testimonial.name}</h3>
                                            <p className={styles.role}>{testimonial.role}</p>
                                        </div>
                                        <StarRating rating={testimonial.rating} />
                                    </div>
                                    <p className={styles.text}>{testimonial.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className={styles.nextBtn} onClick={nextSlide} aria-label="Next">
                        →
                    </button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
