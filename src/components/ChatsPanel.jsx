import ChatTile from "./ChatTile";
import SearchBar from "./SearchBar";
import styles from "@/styles/ChatsPanel.module.css";

export default function ChatsPanel({onChatClick, isHidden}) {
    const chatInfo = {
        profilePicUrl: '/images/user.png',
        isOnline: false,
        userName: 'User name',
        lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, diam sit amet vestibulum sodales, purus felis blandit orci, ac imperdiet neque dolor efficitur augue.',
        sendDate: '01.01.22',
        nbUnread: 0,
        isSent: false
    };

    return (
        <div className={styles.panel + (isHidden ? ' hidden' : '')}>
            <SearchBar />
            <div className={styles['chats-list']}>
                <ChatTile onClick={onChatClick} data={chatInfo} />
                <ChatTile onClick={onChatClick} data={{...chatInfo, isOnline: true, isSent: true}} active={true}/>
                <ChatTile onClick={onChatClick} data={{...chatInfo, nbUnread: 3}} />
                <ChatTile onClick={onChatClick} data={{...chatInfo, isOnline: true, nbUnread: 3}}/>
                <ChatTile onClick={onChatClick} data={{...chatInfo, isSent: true}} />
            </div>
        </div>
    )
}
