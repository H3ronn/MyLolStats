import React from "react";
import PageContext from "context";

const withChampionName = (Component) => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {(context) => <Component {...props} pageContext={context} />}
      </PageContext.Consumer>
    );
  };
};

export default withChampionName;
