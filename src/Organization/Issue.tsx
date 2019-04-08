import React, { Component } from "react";

type Props = {
  issue: IssueProps;
};

type IssueProps = {
  title: string;
};

export default class Issue extends Component<Props, {}> {
  render() {
    return <li>{this.props.issue.title}</li>;
  }
}
