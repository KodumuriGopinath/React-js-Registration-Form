// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    isFirstName: false,
    isLastName: false,
    isSuccess: false,
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  blurEventFirst = () => {
    const {firstNameInput} = this.state
    if (firstNameInput === '') {
      this.setState({isFirstName: true})
    } else {
      this.setState({isFirstName: false})
    }
  }

  blurEventLast = () => {
    const {lastNameInput} = this.state
    if (lastNameInput === '') {
      this.setState({isLastName: true})
    } else {
      this.setState({isLastName: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstNameInput, lastNameInput} = this.state
    if (firstNameInput === '') {
      this.setState({isFirstName: true})
    }
    if (lastNameInput === '') {
      this.setState({isLastName: true})
    } else if (firstNameInput !== '' && lastNameInput !== '') {
      this.setState({isSuccess: true})
    }
  }

  submitAnotherResponse = () => {
    this.setState({isSuccess: false, firstNameInput: '', lastNameInput: ''})
  }

  render() {
    const {
      firstNameInput,
      lastNameInput,
      isFirstName,
      isLastName,
      isSuccess,
    } = this.state

    const firstNameClass = isFirstName ? 'first-true-input' : ''
    const lastNameClass = isLastName ? 'last-name-input' : ''

    return (
      <div className="registration-page-container">
        <h1 className="main-heading">Registration</h1>

        {isSuccess ? (
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button
              className="another-response-button"
              onClick={this.submitAnotherResponse}
              type="button"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="text-and-input">
              <label className="text-name" htmlFor="firstName">
                First Name
              </label>
              <br />
              <input
                placeholder="First name"
                className={`input-text ${firstNameClass}`}
                id="firstName"
                type="text"
                onChange={this.onChangeFirstName}
                value={firstNameInput}
                onBlur={this.blurEventFirst}
              />
              {isFirstName && <p className="require-text">Required</p>}
            </div>
            <div className="text-and-input">
              <label className="text-name" htmlFor="LastName">
                Last Name
              </label>
              <br />
              <input
                placeholder="Last name"
                className={`input-text ${lastNameClass}`}
                id="LastName"
                type="text"
                onChange={this.onChangeLastName}
                value={lastNameInput}
                onBlur={this.blurEventLast}
              />
              {isLastName && <p className="require-text">Required</p>}
            </div>
            <div className="submit-button-div">
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
