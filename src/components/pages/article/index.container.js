// @flow
import { connect } from 'react-redux'
import Article from '.'

import {
  initialize,
  handleClickInfo,
  handleClickModalCloseButton,
  reset,
} from '../../../modules/article'

const mapStateToProps = ({ article, load }) => {
  return {
    article,
    load
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  actions: {
    initialize(id: number) {
      dispatch(initialize(id))
    },
    handleClickInfo() {
      dispatch(handleClickInfo())
    },
    handleClickModalCloseButton() {
      dispatch(handleClickModalCloseButton())
    },
    reset() {
      dispatch(reset())
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Article)
