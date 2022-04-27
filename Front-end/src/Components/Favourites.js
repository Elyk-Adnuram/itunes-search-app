import React,{Component} from 'react';
import '../App.css'; //Import CSS File.
import 'bootstrap/dist/css/bootstrap.min.css' //Import bootstrap styling from React bootstrap.



class Favourites extends Component {
    constructor(props) {
        super(props);
        //Binding of component handlers.
        this.deleteItem = this.deleteItem.bind(this);
    }

    //This handler deletes the selected list item.
    deleteItem(e){
        this.props.deleteSelectedItem(e.target.id)
    }
    
    render() {
    let favList = []; //Declare empty array.
    if(!(this.props.isLoadingFavs)){
        const arr = this.props.favItems //Store favItems state in arr.
        favList = arr.map((listItem, index)=> { 
            return(
            <div id="fav" key={index}>
                {listItem.trackName}  {listItem.collectionName}  {listItem.artistName} <span><button className="buttondel" id={index} onClick={this.deleteItem}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg></button></span>
            </div>)
        })

        console.log('favList:'+ favList[0]);

        return(
            <div>
                {favList}
            </div>
        )
    }else{
        return(
            <div id="fav">No Favourites Added</div>
        )
    }
}
}


export default Favourites //Export Component Favourites.