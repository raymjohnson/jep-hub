import React, { Component } from "react";

import QueryWrapper from "../QueryWrapper";
import Issue from "./Issue";

import organizationQuery from "./OrganizationQuery";

type IssueProps = {
  title: string;
  url: string;
};

type Repository = {
  name: string;
  issues: { nodes: IssueProps[] };
};

type OrganizationProps = {
  login: string;
  url: string;
  repositories: { nodes: Repository[] };
};

class Organization extends Component<OrganizationProps> {
  renderIssue = (issues: Array<IssueProps>) => {
    return issues.map(issue => {
      return <Issue issue={issue} />;
    });
  };

  render() {
    return (
      <div>
        {this.renderIssue(this.props.repositories.nodes[0].issues.nodes)}
      </div>
    );
  }
}

type WrappedOrganizationProps = {
  login: string;
};

export default class extends Component<WrappedOrganizationProps> {
  render() {
    const { login } = this.props;

    return (
      <QueryWrapper query={organizationQuery} variables={{ login }}>
        {({ organization }) => {
          return <Organization login={login} {...organization} />;
        }}
      </QueryWrapper>
    );
  }
}
