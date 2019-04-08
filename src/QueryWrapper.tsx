import * as React from "react";
import { Query } from "react-apollo";

type QueryWrapperProps = {
  query: Query;
  variables?: {};
  // when a component's child is a function (here it is being passed data)
  children(data: any): React.ReactNode;
};

export default class QueryWrapper extends React.Component<QueryWrapperProps> {
  render() {
    const { query, variables } = this.props;
    return (
      <Query query={query} variables={variables}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return this.props.children(data);
        }}
      </Query>
    );
  }
}
