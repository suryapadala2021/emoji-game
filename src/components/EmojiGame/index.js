import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'

class EmojiGame extends Component {
  state = {clickedEmoji: [], score: 0, highScore: 0, game: ''}

  check = name => {
    const {clickedEmoji, score, highScore} = this.state
    if (!clickedEmoji.includes(name)) {
      this.setState(prev => ({
        clickedEmoji: [...prev.clickedEmoji, name],
        score: prev.score + 1,
      }))
    } else {
      this.setState({game: 'lost'})
      if (score > highScore) {
        this.setState({highScore: score})
      }}}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score,highScore, game} = this.state
    const shuffled = this.shuffledEmojisList()
    let result='continue'
    return (
      <div className="bg-container">
        <div className="responsive-container">
          <NavBar score={score} highScore={highScore}/>
          {result === 'continue' && (
            <ul className="emoji-list-container">
              {shuffled.map(emoji => (
                <EmojiCard check={this.check} key={emoji.id} details={emoji} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
