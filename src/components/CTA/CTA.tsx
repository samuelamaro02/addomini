import styles from './CTA.module.scss';

export default function CTA() {
    return (
        <section id="sobre" className={styles.cta}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.subtitle}>nosso significado</span>
                    <h2 className={styles.title}>Por que Anno Domini?</h2>
                    <p className={styles.description}>
                        A sigla AD provém do termo latino Anno Domini, que significa "Ano do Senhor",
                        utilizado no Ocidente para marcar os anos subsequentes ao ano 1. A partir dessa
                        referência ao tempo, surgiu a identidade da AD Consultoria e Treinamento, com o
                        propósito de promover momentos decisivos e gerar transformações duradouras.
                    </p>
                    <a
                        href="https://api.whatsapp.com/send/?phone=5583988990673&text=Quero+entender+mais+da+consultoria+Anno+Domini.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary"
                    >
                        ENTRAR EM CONTATO
                    </a>
                </div>

                <div className={styles.imageWrapper}>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: 'url(/images/01-1.webp)' }}
                    />
                </div>
            </div>
        </section>
    );
}
