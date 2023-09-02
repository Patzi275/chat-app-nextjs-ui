import styles from '@/styles/UserMessage.module.css';

export default function UserMessage({ message }) {
    return (
        <div className={styles.message}>
            <div className={styles.content}>
                {message.content}
            </div>
            {
                message.sentAt
                    ? <div className={styles.time}>
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 12L7.25 17C7.25 17 8.66939 15.3778 9.875 14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 12L13.25 17L22 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 7L12.5 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div>{message.sentAt}</div>
                    </div>
                    : null
            }
        </div>
    );
}
