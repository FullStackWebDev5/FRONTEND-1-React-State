import { Component } from 'react'

class SocialMedia extends Component {
  constructor() {
    super()
    this.state = {
      activeTab: 'POSTS'
    }
  }

  render() {
    return (
      <div>
        <h1>Social Media App</h1>
        <button
          onClick={() => this.setState({ activeTab: 'POSTS' })}
        >
          Posts
        </button>
        <button
          onClick={() => this.setState({ activeTab: 'FRIEND_REQUESTS' })}
        >
          Friend Requests
        </button>
        <button
          onClick={() => this.setState({ activeTab: 'MESSAGES' })}
        >
          Messages
        </button>

        <div>
          {this.state.activeTab === 'POSTS' && (
            <div>
              <h2>Posts</h2>
              <div>Post 1</div>
              <div>Post 2</div>
            </div>
          )}

          {this.state.activeTab === 'FRIEND_REQUESTS' && (
            <div>
              <h2>Friend Requests</h2>
              <div>Friend Request 1</div>
              <div>Friend Request 2</div>
            </div>
          )}

          {this.state.activeTab === 'MESSAGES' && (
            <div>
              <h2>Messages</h2>
              <div>Message 1</div>
              <div>Message 2</div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SocialMedia