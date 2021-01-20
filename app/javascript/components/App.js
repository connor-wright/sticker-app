import React from "react";
import Stickers from './Stickers';
import SearchBar from './SearchBar';
import { withStyles } from "@material-ui/core/styles";

const styles = ({
  root: {
    width: "1920px",
    height: "1080px",
    display: "flex",
    flexDirection: "row"
  }
});

//Root for our component tree
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeId: null};
    
    this.setActiveId = activeId => {
      this.setState({activeId: activeId});
    };
  }
  
  
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <SearchBar setActiveId={this.setActiveId}/>
        <Stickers activeId={this.state.activeId}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);