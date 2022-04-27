import React,{Component} from 'react'; //Import the React module from React.
import '../App.css'; //Import App stylesheet.
import 'bootstrap/dist/css/bootstrap.min.css' //Import Bootstrap styles.

//Item creates a card component that was imported from bootstrap.
//Item builds the individual cards that is manufactured in Main.js.
//Props are passed down to use relevant information.
class Item extends Component {
    constructor(props) {
        super(props);
        //Binding of component handlers.
        this.addItemToFavs = this.addItemToFavs.bind(this);
    }
    
    //This handler triggers addToFavs in Main.js and sends the item and index as parameters.
    addItemToFavs(e){
      e.preventDefault();
      this.props.addToFavs(this.props.item, e);
    }


    render(){
    const item = this.props.item; //The item props sent down from Main.js.
    const key = this.props.index; //The index props sent down from Main.js.
    return(
            <div id="card" key={key}>
                
                    <div id="cardbox">
                        <h5 id="title">
                                {item.hasOwnProperty('trackName')? <b>{item.trackName}</b> : <b>&nbsp;</b>}  
                        </h5>
                        <h6 id="sub"  className="mb-2 text-muted">{item.artistName}</h6>
                        <h6 id="sub" className="mb-2 text-muted">{item.collectionName}</h6>
                        <div>
			                <img id="image" alt={item.description} src={item.artworkUrl100} />
		                </div>
                        <button className="click" variant="primary" type="submit" onClick={this.addItemToFavs}>
                            Add to Favourites
                        </button>
                    </div>
                
            </div>
        );
    }
}

export default Item; //Export Item component.