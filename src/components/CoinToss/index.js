import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {Tails: 0, Heads: 0, image: false}

  onTossHeads = () => {
    this.setState(prevState => ({Heads: prevState.Heads + 1, image: false}))
  }

  onTossTails = () => {
    this.setState(prevState => ({Tails: prevState.Tails + 1, image: true}))
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    // console.log(tossResult)
    if (tossResult === 1) {
      this.onTossHeads()
    } else {
      this.onTossTails()
    }
  }

  render() {
    const {Heads, Tails, image} = this.state
    const Total = Heads + Tails

    return (
      <div className="game-bg-container">
        <div className="game-app-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {image ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="coin-image"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="coin-image"
              alt="toss result"
            />
          )}
          <button
            type="submit"
            className="coin-button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="counter-container">
            <p className="count">Total: {Total}</p>
            <p className="count">Heads: {Heads}</p>
            <p className="count">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
