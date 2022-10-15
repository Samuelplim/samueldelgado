import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Portifolio e informações do desenvolvedor Samuel Delgado"
        />
        <title>Samuel Delgado</title>
      </Head>
      <main className={styles.main}>
        <section>
        <Image
          src="/perfil.jpg"
          alt="Samuel Delgado" 
          width='300'
          height='300'
        />
        <p>SAMUEL DELGADO</p>
        <div>
          <Image
            src='/tech/github.svg'
            alt="Icone GitHub"
            width='100'
            height='100'
          />
          <Image
            src='/tech/javaScript.svg'
            alt="Icone JavaScript"
            width='100'
            height='100'
          />
          <Image
            src='/tech/linux.svg'
            alt="Icone Linux"
            width='100'
            height='100'
          />
          <Image
            src='/tech/nodejs.svg'
            alt="Icone nodejs"
            width='100'
            height='100'
          />
          <Image
            src='/tech/react.svg'
            alt="Icone react"
            width='100'
            height='100'
          />
        </div>
        </section>

        <section>

          <div>
            <p>Rocketseat</p>
            <p>Trilha Explore</p>
            <p>set de 2022 - mar de 2023</p>
            <p>
              Tecnologias do curso: HTML, CSS, JavaScript, Git, Node.js, SQL,
              React, Consumo de API, CI/CD O Explorer é um programa de 6 meses
              que vai te ensinar a se posicionar como um profissional de
              programação e acessar a sua primeira oportunidade no mercado. O
              Explorer foi criado com um método inteligente e eficiente para te
              ajudar a evoluir habilidades técnicas e comportamentais
              específicas que farão de você um profissional pronto para lidar
              com desafios do mundo real.
            </p>
          </div>

          <div>
            <p>Estácio</p>
            <p>Pós-graduação Lato Sensu - Especialização</p>
            <p>mai de 2022 - mai de 2023</p>
            <p>
              1º Semestre Desenvolvimento pessoal, Carreira, Empregabilidade
              Fundamentos de Segurança da Informação Gestão Estratégica de TI
              Modelagem de Dados Projeto e Otimização de Banco de Dados
            </p>
          </div>

          <div>
            <p>Centro Universitário Estácio da Amazônia</p>
            <p>Bacharelado em Sistemas de Informação</p>
            <p>2018 - 2021</p>
            <p>
              C++, JAVA, POSTGRESQL, HTML, CSS, REACT NATIVE, NOSQL, PROJETO
              LTD, DIREITO CIBERNÉTICO, INDICADORES DE DESEMPENHO EM TI,
              PROJETOS DE SISTEMAS DE INFORMAÇÃO, TEORIA DA INFORMAÇÃO,
              INTELIGÊNCIA EMPRESARIAL, FERRAMENTAS DE BUSINESS INTELIGENCE,
              ARQUITETURAS DE REDES, ARQUITETURAS DE SISTEMAS, INTELIGÊNCIA
              ARTIFICIAL, ESTRUTURAS DE DADOS, MATEMÁTICA COMPUTACIONAL
            </p>
          </div>

          <div>
            <p>Estadual Professor Carlo Casadio</p>
            <p>Ensino médio Escola</p>
            <p>2014 - 2017</p>
          </div>

        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/samuel-delgado/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Develped by <span className={styles.logo}>Samuel Delgado</span>
        </a>
      </footer>
    </div>
  );
}
