import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault()

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Note have been created', 'success')
      }).catch(() => {
        alert.show('Some error occured while note had created')
      })
      alert.show('Note have been created', 'success')
      setValue('')
    } else {
      alert.show('Enter the name of the note')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Type the name of the task..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}