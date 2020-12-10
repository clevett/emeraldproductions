//Save the info for refresh
import { read_cookie, bake_cookie } from 'sfcookies'
const KARMA_COOKIE = 'KARMA_COOKIE'

componentDidMount() {
  const karma = parseInt(read_cookie(KARMA_COOKIE)) || 0
  if(karma) {
    this.setState({karma})
  }
}


const karmaTotal = calculateKarma(this.state.karmaFromRun, this.state.karmaModifier, this.state.dicepool)
bake_cookie(KARMA_COOKIE, karmaTotal)