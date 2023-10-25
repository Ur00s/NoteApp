import Note from "./Note";

export default function ListNotes({notes, removeNote}){
    return (
        <div className="main">
            {notes.map((note, index) => {
                return <Note key={index} id={ note.id } title={note.title} content={note.content} removeNote={removeNote} />
            })}
        </div>
    )
}