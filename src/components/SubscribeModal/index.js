import React, { Component } from 'react'
import Modal from 'react-modal'
import styles from './styles.module.sass'

class SubscribeModal extends Component {
  state = {
    isOpen: false,
  }
  openModal = () => this.setState({ isOpen: true })
  closeModal = () => this.setState({ isOpen: false })
  render() {
    return (
      <div className={styles.subscribeModal}>
        <button className={styles.modalButton} onClick={this.openModal}>
          Subscribe
        </button>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          contentLabel="Subscribe Modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
            },
            content: {
              width: 500,
              height: 330,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
            },
          }}
        >
          <div>
            <iframe
              id="substack-iframe"
              src="https://economyofbits.substack.com/embed"
              width="480"
              height="320"
              scrolling="no"
              title="Subscribe to newsletter"
            />
          </div>
        </Modal>
      </div>
    )
  }
}

export default SubscribeModal
