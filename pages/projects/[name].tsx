import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Project({ project }) {

    const router = useRouter()
    const { name } = router.query
    return (
        <div className={styles.container}>
            <Head>
                <title>Project</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {name}
                </h1>
            </main>
        </div>
    )
}