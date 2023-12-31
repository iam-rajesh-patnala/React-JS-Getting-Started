import "./index.css";

const EmojiCard = props => {
    const { emojiDetails, onEmojiClick } = props
    const { id, emojiName, emojiUrl } = emojiDetails

    const onEmojiCardClick = () => { 
        onEmojiClick(id)
    }

    return (
        <li className="emoji-item">
            <button type="button" className="emoji-btn" onClick={onEmojiCardClick}>
                <img className="emoji-icon" src={emojiUrl} alt={emojiName}/>
            </button>
        </li>
    )
}

export default EmojiCard