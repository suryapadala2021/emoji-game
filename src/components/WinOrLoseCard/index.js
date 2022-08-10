import './index.css'

const WinOrLoseCard = props => {
  const {result,score,reset} = props

  const clicked=()=>{
        reset()
  }

  return (
    <div className="card">
      {result === 'win' && (
          <fragment>
        <img
          className="win-lose-emoji"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="emoji logo"
        />
        <p className="result-text">You Won</p>
        <p >Best Score</p>
        <p className="result-score">12/12</p>
        </fragment>
      )}
      {result === 'lost' && (
          <fragment>
            <img
            className="win-lose-emoji"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="emoji logo"
            />
            <p className="result-text">You Lost</p>
            <p>Score</p>
            <p className="result-score">{score}</p>
        </fragment>
      )}
      <button type="button" className="btn" onClick={clicked}>Play Again</button>
    </div>
  )
}
export default WinOrLoseCard
