import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  state = {searchInput: '', latestHistory: initialHistoryList, isTrue: false}

  FillFunc = value => {
    const {latestHistory} = this.state
    const newHistoryList = latestHistory.filter(each => each.id !== value)

    if (newHistoryList.length === 0) {
      this.setState({latestHistory: newHistoryList, isTrue: true})
    } else {
      this.setState({latestHistory: newHistoryList})
    }
  }

  ChangeFunc = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, latestHistory} = this.state
    let {isTrue} = this.state
    const newHistoryList = latestHistory.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (newHistoryList.length === 0) {
      isTrue = true
    }

    return (
      <div className="main-cont">
        <div className="top-holder">
          <img
            alt="app logo"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="search-holder">
            <img
              alt="search"
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              type="search"
              className="input"
              placeholder="Search History"
              onChange={this.ChangeFunc}
              value={searchInput}
            />
          </div>
        </div>

        <div className="main-holder">
          {!isTrue && (
            <ul className="inner-holder">
              {newHistoryList.map(each => (
                <li className="item-holder" key={each.id}>
                  <p className="time">{each.timeAccessed}</p>
                  <div className="icon-holder">
                    <img
                      className="logo-ele"
                      alt="domain logo"
                      src={each.logoUrl}
                    />
                    <div className="logo-cont">
                      <p className="name">{each.title}</p>
                      <p className="site">{each.domainUrl}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="delete"
                    data-testid="delete"
                    onClick={() => this.FillFunc(each.id)}
                  >
                    <img
                      className="delete-icon"
                      alt="delete"
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    />{' '}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {isTrue && (
            <div className="empty-cont">
              <p className="empty-msg">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
