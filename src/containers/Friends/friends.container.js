import React from "react";
import data from "@solid/query-ldflex";
import { useWebId } from "@inrupt/solid-react-components";
import {NavBar} from "../../components";
import { Value } from '@solid/react';
import SubFriends from './SubFriends';
import { withWebId } from '@solid/react';

class FriendsComponent extends React.Component {
    state = this.savedState;
  
    // Save the state in the URL fragment
    get savedState() {
      return { expression: decodeURIComponent(window.location.hash.substr(1)) };
    }
    set savedState({ expression }) {
      window.location.replace(`#${encodeURIComponent(expression)}`);
    }
  
    componentDidUpdate(prevProps) {
      // If the user just logged in, show an example with their WebID
      const { webId } = this.props;
      if (webId && webId !== prevProps.webId && !this.savedState.expression)
        this.setState({ expression: `[${webId}].name` });
    }
  
    onExpressionChange = expression => {
      this.savedState = { expression };
    }
  
    render() {
      return (
        <SubFriends expression={this.state.expression /*|| defaultExpression*/}
                      onExpressionChange={this.onExpressionChange}/>
      );
    }
  
  }
  
  export default withWebId(FriendsComponent);