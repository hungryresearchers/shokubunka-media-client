// @flow
import { connect } from 'react-redux'
import Article from '.'

import {
  initialize,
  handleClickInfo,
  handleClickModalCloseButton,
} from '../../../modules/article'

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
    handleClickInfo() {
      dispatch(handleClickInfo())
    },
    handleClickModalCloseButton() {
      dispatch(handleClickModalCloseButton())
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Article)
