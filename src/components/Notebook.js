import React from 'react'
import { connect } from 'react-redux'
//import { toggleNote } from '../actions'
import Note from '../components/Note'

let Notebook = ({ notes }) => (
    <ul
        style={{
            paddingLeft: 0,
        }}
    >
        {notes.map(note => (
            <Note key={note.title} {...note} />
        ))}
    </ul>
)

const mapStateToProps = state => ({
    notes: state.notes
})

//const mapDispatchToProps = dispatch => ({
//    onNoteClick: title => {
//        dispatch(toggleNote(title))
//    }
//})

Notebook = connect(
    mapStateToProps,
)(Notebook)

export default Notebook
