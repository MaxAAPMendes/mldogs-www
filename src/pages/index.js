import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Container from '@mui/material/Container';
import { MensagemAlerta } from '../utils/comuns/mensagemAlerta';

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcela Love Dogs</title>
        <meta name="description" content="Sistema de Gerenciamento de creche e hospedagem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logodoguinho.png" />
      </Head>
      <Container maxWidth="lg">
        <main className={styles.main}>
          <div className={styles.description}>
            <Image
              // src="/vercel.svg"
              src="/logo_mld_circle_transparente.png"
              alt="Logo Marcela Love Dogs"
              width={220}
              height={200}
              priority
            />
          </div>
          <div className={styles.center}>
            <div className={styles.thirteen}>
              <Link href="/cliente/linkAutoCadastro">Pré Cadastro Cliente</Link>
            </div>
          </div>

          <div className={styles.grid}>
            <p>By{' Max Pinheiro'}</p>
          </div>
        </main>
      </Container>
      <MensagemAlerta />
    </>
  )
}
