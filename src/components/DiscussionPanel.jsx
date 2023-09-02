import PeerMessage from "./PeerMessage";
import SenderInfoBar from "./SenderInfoBar";
import UserMessage from "./UserMessage";

export default function DiscussionPanel() {
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
        <div className='discussion-panel'>
            <SenderInfoBar />
            <div className='chat-thread'>
                {
                    messages.map((msg) => (
                        msg.sender == 'me'  
                            ? <UserMessage key={msg.id} message={msg} />
                            : <PeerMessage key={msg.id} message={msg} />
                    ))
                }
            </div>
        </div>
    );
}
