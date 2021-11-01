import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tails: 0, heads: 0, image: false}

  onTossHeads = () => {
    this.setState(prevState => ({heads: prevState.heads + 1, image: false}))
  }

  onTossTails = () => {
    this.setState(prevState => ({tails: prevState.tails + 1, image: true}))
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    // console.log(tossResult)
    if (tossResult === 0) {
      this.onTossHeads()
    } else {
      this.onTossTails()
    }
  }

  render() {
    const {heads, tails, image} = this.state
    const Total = heads + tails

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
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
