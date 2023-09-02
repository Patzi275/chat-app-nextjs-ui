import ChatTile from "./ChatTile";
import SearchBar from "./SearchBar";

export default function ChatsPanel() {
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
        <div className="chats-panel">
            <SearchBar />
            <div className="chats-panel__tile-list">
                <ChatTile data={chatInfo} />
                <ChatTile data={{...chatInfo, isOnline: true, isSent: true}} active={true}/>
                <ChatTile data={{...chatInfo, nbUnread: 3}} />
                <ChatTile data={{...chatInfo, isOnline: true, nbUnread: 3}}/>
                <ChatTile data={{...chatInfo, isSent: true}} />
            </div>
        </div>
    )
}
