import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'
import FullUsers from './FullUsers'
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "70%"
  }
};
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    }
  }

  openModal() {
    this.setState({
      modal: true
    })
  }

  closeModal() {
    this.setState({
      modal: false
    })
  }
  getTabName() {
    let { tab } = this.props.match.params;
    switch (tab) {
      case 'info': {
        return <p>You are in <b>
          Info tab
          </b>
        </p>
        break;
      }
      case 'chat': {
        return <p>You are in <b>
          Chat tab
          </b>
        </p>
        break;
      }
      case 'others': {
        return <p>You are in <b> Others tab</b></p>
        break;
      }
      default: return <p>Wrong URL</p>
    }
  }
  render() {
    return (
      <div>
        <FullUsers />
        <div>
          <Modal
            isOpen={this.state.modal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <div>
              <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>

                <Link to={`/users/info`}>
                  <p>
                    Info
                  </p>
                </Link>
                <Link to={`/users/chat`}>
                  <p>

                    Chat
                  </p>
                </Link>
                <Link to={`/users/others`}>
                  <p>

                    Others
                  </p>
                </Link>
              </div>
              {
                this.getTabName()
              }
              <Link to={`/users`}>
                Go to Users List
              </Link>
            </div>
            <div>

            </div>

          </Modal>
        </div>
      </div >

    )
  }
}

export default User
