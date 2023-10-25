import Remove from "../../images/cancel.png";
import "./styles.scss";

export default function Note({id, title, content, removeNote}) {
    return (
        <div className="note">
          <img onClick={ () => {removeNote(id)}} className="remove-note" src={Remove} alt="Izlazak" />
          <h4 className="title">{title}</h4>
          <p className="content">{content}</p>
        </div>
    )
}