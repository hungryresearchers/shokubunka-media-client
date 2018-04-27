// @flow
import React, { Component } from 'react'
import { HeaderTitle } from '../atoms/header-icon'

type Props = {
  actions: Object,
}

export default class Home extends Component<Props, void> {
  constructor(props : Props) {
    super()
  }

  componentDidMount() {
    this.props.actions.initialize()
  }

  render() {
    return (
      <div>
        <HeaderTitle />
      </div>
    )
  }
}
