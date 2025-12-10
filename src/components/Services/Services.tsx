import { FaChessKnight, FaUserTie, FaCogs, FaPlane } from 'react-icons/fa';
import styles from './Services.module.scss';

const services = [
    {
        Icon: FaChessKnight,
        title: 'Estratégia Empresarial',
        description: 'Planejamento estratégico e avaliação de oportunidades de mercado (expansão, diversificação, integração) para alinhar objetivos e crescimento.'
    },
    {
        Icon: FaUserTie,
        title: 'Gestão de Pessoas',
        description: 'Otimização de atendimento ao cliente, diagnósticos organizacionais, avaliação de desempenho e desenvolvimento de políticas de gestão e ética.'
    },
    {
        Icon: FaCogs,
        title: 'Gestão de Processos',
        description: 'Mapeamento completo de processos, análise de produtividade, criação de fluxogramas e implantação de programas de melhoria contínua.'
    },
    {
        Icon: FaPlane,
        title: 'Gestão no Turismo',
        description: 'Desenvolvimento de destinos turísticos, diagnóstico da oferta local, marketing estratégico, modelagem de negócios e criação de roteiros regionais.'
    }
];

export default function Services() {
    return (
        <section id="servicos" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Nossos serviços</span>
                    <h2 className={styles.title}>
                        Soluções <span className="highlight">sob medida</span> para o seu negócio
                    </h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <service.Icon className={styles.icon} size={50} color="#5468E2" />
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
