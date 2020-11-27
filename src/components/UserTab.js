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

          // let { userId, tab } = props.match.params;
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
                    let { userId, tab } = this.props.match.params;
                    console.log('====================================');
                    console.log(tab);
                    console.log('====================================');
                    switch (tab) {
                              case 'info': {
                                        return <p>You are in Info tab</p>
                                        break;
                              }
                              case 'chat': {
                                        return <p>You are in Chat tab</p>
                                        break;
                              }
                              case 'others': {
                                        return <p>You are in Others tab</p>
                                        break;
                              }
                              default: return <p>Wrong URL</p>
                    }
          }
          render() {
                    let { userId, tab } = this.props.match.params;
                    return (
                              <div>
                                        <FullUsers />
                                        <p>Selected user id is {userId} </p>
                                        <div>
                                                  <Modal
                                                            isOpen={this.state.modal}
                                                            onRequestClose={() => this.closeModal()}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                  >

                                                            <h2>{userId}</h2>
                                                            <div style={{ width: "100%", justifyContent: "space-evenly" }}>
                                                                      <Link to={`/users/${userId}/info`}>
                                                                                Info
              </Link>
                                                                      <Link to={`/users/${userId}/chat`}>
                                                                                Chat
              </Link>
                                                                      <Link to={`/users/${userId}/others`}>
                                                                                Others
              </Link>
                                                                      {
                                                                                this.getTabName()
                                                                      }
                                                            </div>
                                                            {/* <button onClick={() => this.closeModal()}>close</button> */}
                                                            <div>

                                                            </div>

                                                  </Modal>
                                        </div>
                              </div >

                    )
          }
}

export default User
