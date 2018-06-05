// @flow
import { connect } from 'react-redux'
import Article from '.'

import { initialize } from '../../../modules/article'

const mapStateToProps = ({ article }) => {
  return {
    article,
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  actions: {
    initialize() {
      dispatch(initialize())
    },
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Article)
