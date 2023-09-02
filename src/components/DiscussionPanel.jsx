import PeerMessage from "./PeerMessage";
import SenderInfoBar from "./SenderInfoBar";
import UserMessage from "./UserMessage";
import styles from "@/styles/DiscussionPanel.module.css";


export default function DiscussionPanel({isHidden, onActionsClick}) {
    const messages = [
        {
            id: 0,
            sender: 'me',
            content: 'Lorem ipsum dolor sit amet',
            sentAt: '22:01',
        },
        {
            id: 1,
            sender: 'me',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, diam sit amet vestibulum sodales, purus felis blandit orci, ac imperdiet neque dolor efficitur augue',
            sentAt: '22:02',
        },
        {
            id: 2,
            sender: 'he',
            content: 'Lorem ipsum dolor sit, consectetur.',
            sentAt: '22:11',
        },
        {
            id: 3,
            sender: 'he',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, diam sit amet vestibulum sodales, purus felis blandit orci, ac imperdiet neque dolor efficitur augue. Sed quis arcu non odio dictum aliquet. Duis et pretium massa, non ultricies est. Morbi quis suscipit nibh, non commodo elit. Suspendisse bibendum est eu enim congue malesuada.',
            sentAt: '22:12',
        },
        {
            id: 4,
            sender: 'me',
            content: 'Lorem ipsum dolor sit, consectetur.',
            sentAt: '22:15',
        },
        {
            id: 5,
            sender: 'he',
            content: 'Lorem ipsum dolor sit, consectetur adipiscing elit. Duis euismod.',
            sentAt: '22:16',
        },
    ];

    return (
        <div className={styles.panel + (isHidden ? ' hidden' : '') } id='discussion-panel'>
            <SenderInfoBar onActionsClick={onActionsClick}/>
            <div className={styles['thread-container']}>
                <div className={styles.thread}>
                    {
                        messages.map((msg) => (
                            msg.sender == 'me'  
                                ? <UserMessage key={msg.id} message={msg} />
                                : <PeerMessage key={msg.id} message={msg} />
                        ))
                    }
                </div>
                <div className={styles['message-form']}>
                    <input type="text" className={styles.input + ' shadow-lg'} placeholder="Message..."/>
                    <button type="submit" className={styles.button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
