export default function CreateNotes({setTitle, setContent, createNote}) {
    return (
        <div className="create-wrapper">
          <hr />
          <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Add note title"  /> <br />  
          <input onChange={(e) => setContent(e.target.value)} type="text" placeholder="Add note content" /> <br />
          <button onClick={createNote}>Create</button>
        </div>
    )
}