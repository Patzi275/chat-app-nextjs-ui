import Avatar from "./Avatar";
import styles from "@/styles/ChatTile.module.css";

export default function ChatTile({ data, active }) {
    const message = data.lastMessage.substr(0, 40) + '...';
    const onlineStatusStyle = data.isOnline ? styles['online-dot'] : '';
    const selectedStyle = active ? styles.tile__selected : '';

    return (
        <div className={`${styles.tile} ${selectedStyle}`}>
            <div className={styles['avatar-container']}>
                <Avatar
                    src={data.profilePicUrl}
                    size={64}
                    className={styles.avatar}
                />
                <div className={onlineStatusStyle}></div>
            </div>
            <div className={styles['infos-container']}>
                <div className={styles.infos}>
                    <div className={styles.name}>{data.userName}</div>
                    <div className={styles.date}>{data.sendDate}</div>
                </div>
                <div className={styles.message}>{message}</div>
            </div>

            {
                data.nbUnread
                    ? <div className={`${styles.badge} ${styles['badge--count']}`}>
                        {data.nbUnread}
                    </div>
                    : data.isSent
                        ? <svg className={`${styles.badge} ${styles['badge--read']}`} width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 12L7.25 17C7.25 17 8.66939 15.3778 9.875 14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 12L13.25 17L22 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 7L12.5 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        : null
            }

        </div>
    );
}
