import styles from '../../styles/Home.module.css';
import Head from "next/head";
import { Props } from "./[client_id]";

export function ClientDetail({ serializedRecord }: Props) {

    const recordId = JSON.stringify(serializedRecord._id)

    let completeEntry = async () => {
        const res = await fetch('/api/completeNOMS', {
            method: 'PUT',
            body: recordId
        }); if (res.ok) {
            window.location.replace('/')
        }
        else {
            alert('Your database connection was unsuccessful, try reloading the page or reaching out to sthompson@norainc.org for support')
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>NOMS SPARS Todo</title>
                <meta name="description" content="Generated by create next app" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <main className={styles.main}>
                <h3>
                    NOMS for:
                </h3>
                <h3>
                    {serializedRecord.client_information.client_info.name}
                </h3>
                <h3>
                    {serializedRecord.client_information.interview_type.toString().toUpperCase()}
                </h3>
                <div className={styles.grid}>
                <pre className={styles.code}>
                    {JSON.stringify(serializedRecord, null, '\t')}
                </pre>
                <h3>For BMI Stats, Services Received, and Admit Date, Check Dr. Cloud</h3>
                </div>
                <button className={styles.button} onClick={() => completeEntry()}><h3>Entered NOMS</h3></button>
            </main>
        </div>
    );
}
