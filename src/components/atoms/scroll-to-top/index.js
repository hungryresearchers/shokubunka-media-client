// @flow
import * as React from 'react'
import { withRouter } from 'react-router-dom'
import * as H from 'history'

type Props = {
  history: H.history,
  location: H.Location,
  children: React.Element
}

const ScrollToTop = (App) => (
  class _ extends React.PureComponent<Props> {
    constructor(props) {
      super(props)

      this.props.history.listen((location, action) => {
        if (action !== 'POP') {
          window.scrollTo(0, 0)
        }
      })
    }

    render() {
      return (
        <React.Fragment>
          <App {...this.props} />
        </React.Fragment>
      )
    }
  }
)

export default (App: any) => withRouter(ScrollToTop(App))
