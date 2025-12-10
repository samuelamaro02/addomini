import styles from './Values.module.scss';

const values = [
    {
        number: '01',
        title: 'Compromisso com a excelência',
        description: 'É entregar resultados de qualidade, superando expectativas e garantindo a satisfação do cliente.'
    },
    {
        number: '02',
        title: 'Foco no cliente',
        description: 'É entregar resultados de qualidade, superando expectativas e garantindo a satisfação do cliente com excelência.'
    },
    {
        number: '03',
        title: 'Integridade e transparência',
        description: 'Para nós significa, agir com ética e transparência em nossas interações, seja com clientes e parceiros.'
    },
    {
        number: '04',
        title: 'Desenvolvimento contínuo',
        description: 'Treinamento e métodos atualizados para soluções que atendem às suas necessidades.'
    }
];

export default function Values() {
    return (
        <section className={styles.values}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>por Que a AD?</span>
                    <h2 className={styles.title}>
                        Conheça o <span className="highlight">que nos move</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {values.map((value, index) => (
                        <div key={index} className={styles.card}>
                            <span className={styles.number}>{value.number}</span>
                            <h3 className={styles.cardTitle}>{value.title}</h3>
                            <p className={styles.cardDescription}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
