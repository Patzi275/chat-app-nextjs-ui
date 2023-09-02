import Avatar from "./Avatar";
import styles from '@/styles/PeerMessage.module.css';


export default function PeerMessage({ message }) {
    return (
        <div className={styles['message-wrapper']}>
            <Avatar 
                src="/images/user.png"
                size={32}
                className={styles.avatar}
            />
            <div className={styles.message}>
                <div className={styles.content + ' shadow' }>
                    {message.content}
                </div>
                <div className={styles.time}>{message.sentAt}</div>
            </div>
        </div>

    );
}
