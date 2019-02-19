import React, {Component} from 'react';
import {observer} from 'mobx-react';
import NameSpaceStore from '../../store/namespace';
import LoadingBar from '../../components/LoadingBar'

@observer
class NameSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
    this.handleRefresh = this.handleRefresh.bind(this)
  }
  componentDidMount() {
    console.log(this);
  }

  handleRefresh () {
    this.setState({
      isLoading: true
    })
  }
  
  render() {
    const mainPage = this.state.isLoading ? <LoadingBar /> : <div>
      <h1>This is mobx-react!</h1>
      <p>First name: <input type="text" value={NameSpaceStore.firstName} onChange={e => NameSpaceStore.setValue('firstName', e)} /></p>
      <p>Last name: <input type="text" value={NameSpaceStore.lastName} onChange={e => NameSpaceStore.setValue('lastName', e)} /></p>
      <p>Full name: {NameSpaceStore.fullName}</p>
      <p><button onClick={NameSpaceStore.handleReset}>Reset</button></p>
      <p><button onClick={this.handleRefresh}>refresh</button></p>
    </div>
    return (
      mainPage
    );
  }
}

export default NameSpace;
