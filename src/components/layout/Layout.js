import Header from "./Header";
import Footer from "./Footer";
import "./styles.scss"

export default function Layout(props) {
    return (
        <div className="app">
            <Header headerTitle={props.headerTitle}/>

            {props.children}

            <Footer />
        </div>
    )
}