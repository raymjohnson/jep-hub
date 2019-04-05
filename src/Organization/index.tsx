import React, { Component } from 'react';

import QueryWrapper from "../QueryWrapper"

import organizationQuery from "./OrganizationQuery"

type OrganizationProps = {
  login: string,
  url: string,
}

class Organization extends Component<OrganizationProps> {
  render() {
    return (
      <div>{this.props.login} is available at <a href={`${this.props.url}`}>{this.props.url}</a></div>
    )
  }
}

type WrappedOrganizationProps = {
  login: string
}

export default class extends Component<WrappedOrganizationProps> {
  render() {
    const {login} = this.props

    return (
      <QueryWrapper query={organizationQuery} variables={{login}}>
        {({organization}) => { return <Organization login={login} {...organization} /> }}
      </QueryWrapper>
    )
  }
}
