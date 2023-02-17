import React from 'react'

const Form = () => {
  return (
    <div>
        <h1>Form</h1>
        <form>
            <label>First name:</label><br />
            <input type="text" id="fname" name="fname" value="John" /><br />
            <label>Last name:</label><br />
            <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form