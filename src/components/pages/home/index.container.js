// @flow
import { connect } from 'react-redux'
import Home from '.'

import { initialize } from '../../../modules/home'

const mapStateToProps = ({ home }) => {
  return {
    home,
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
