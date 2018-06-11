// @flow
import { connect } from 'react-redux'
import Home from '.'

import { initialize } from '../../../modules/home'

const mapStateToProps = ({ home, load }) => {
  return {
    home,
    load,
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  actions: {
    initialize() {
      dispatch(initialize())
    },
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
