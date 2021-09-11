import React, { Fragment, useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Loader } from '../components/Loader'
import { Notes } from '../components/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
  const {loading, notes, fetchNote, removeNote} = useContext(FirebaseContext)

  useEffect(() => {
    // eslint-disable-next-line 
    fetchNote()
  }, [])

  return (
    <Fragment>
      <Form />
      <hr />
      {loading
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote}/>
      }
    </Fragment>
  )
}
