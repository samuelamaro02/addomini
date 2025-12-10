import styles from './About.module.scss';

const teamMembers = [
    {
        name: "Ari D'Lima",
        bio: "Graduado em Administração e Psicologia, é Mestre em Administração, consultor de empresas nas áreas de planejamento, avaliação, reestruturação e expansão organizacional e professor de Administração.",
        image: "/images/Frame-1-1.webp",
        textColor: 'dark'
    },
    {
        name: "Daniele Viana",
        bio: "Administradora, Pós-Graduada em Gestão de Pessoas e consultora credenciada ao SEBRAE/PB. Atua nas áreas de RH, Atendimento ao Cliente, Políticas Públicas e Planejamento Empresarial, especializada em suporte a empresas, auxiliando na estruturação e no fortalecimento de negócios.",
        image: "/images/Frame-1-2.webp",
        textColor: 'light'
    },
    {
        name: "Antônio Rafael",
        bio: "Bacharel em Turismo, especialista em Turismo de Base Local e consultor credenciado ao SEBRAE/PB. Atuou no Programa Agentes Locais de Inovação (ALI), onde auxiliou no desenvolvimento de estratégias de inovação para o setor de turismo e serviços. Possui experiência em planejamento e marketing de destinos turísticos, ecoturismo e gestão ambiental empresarial.",
        image: "/images/Frame-1-3.webp",
        textColor: 'dark'
    },
    {
        name: "Viviane Carvalho",
        bio: "Administradora, especialista em Finanças Empresariais e Gestão de Clínicas e Consultórios. Consultora Credenciada ao SEBRAE/PB, atua nas áreas de Processos, Atendimento ao cliente e Financeira, com foco na área da saúde.",
        image: "/images/Frame-1-1.webp",
        textColor: 'dark'
    }
];

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>sobre</span>
                    <h2 className={styles.title}>
                        Conheça quem está na frente da <span className="highlight">Anno Domini</span>
                    </h2>
                    <p className={styles.description}>
                        Na AD Consultoria e Treinamento, desenvolvemos estratégias personalizadas
                        para impulsionar o crescimento, a eficiência e o sucesso do seu negócio.
                    </p>
                    <a
                        href="https://api.whatsapp.com/send/?phone=5583988990673&text=Quero+entender+mais+da+consultoria+Anno+Domini.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--secondary"
                    >
                        ENTRAR EM CONTATO
                    </a>
                </div>

                <div className={styles.grid}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${member.textColor === 'light' ? styles.light : styles.dark}`}
                            style={{ backgroundImage: `url(${member.image})` }}
                        >
                            <h3 className={styles.name}>{member.name}</h3>
                            <p className={styles.bio}>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
