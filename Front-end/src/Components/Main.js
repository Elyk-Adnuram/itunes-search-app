import React, { Component } from 'react'; // Import React.
import '../App.css'; //Import CSS File.
import Form from 'react-bootstrap/Form'; //Import external Form component.
import Button from 'react-bootstrap/Button'; //Import external Button component.
import 'bootstrap/dist/css/bootstrap.min.css' //Import Bootstrap.
import Nav from 'react-bootstrap/Nav'; //Imported from React bootstrap.
import Navbar from 'react-bootstrap/Navbar'; //Imported from React bootstrap.
import FormControl from 'react-bootstrap/FormControl'; //Imported from React bootstrap.
import Display from './Header.js' //Imported Display Component.
import fetch from 'isomorphic-fetch'; //Import fetch.
import Item from './Item' //Import Item Component.
import Container from 'react-bootstrap/Container' //Import Container from bootstrap.
import Row from 'react-bootstrap/Row' //Import Row from bootstrap.
import Col from 'react-bootstrap/Col' //Import Col from bootstrap.
import Favourites from './Favourites'; //Import Favourites Component.
import Spinner from 'react-bootstrap/Spinner'; //Import Spinner from bootstrap.

class Main extends Component {
    constructor(props) {
        super(props);
        //Binding of component handlers.
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleMediaChange = this.handleMediaChange.bind(this);
        this.getSearch = this.getSearch.bind(this);
        this.addToFavs = this.addToFavs.bind(this);
        this.deleteSelectedItem = this.deleteSelectedItem.bind(this);
        this.state = {
                       searchApp: '', //User determines the value of state(as the user types in the input field, the state updates)
                       mediaApp: 'all',//The media dropdown determines the value of the state. 'all' by default.
                       searchItems: [],//The users search.
                       isLoading: true,//Checks to see whether or not anything exists on the page.
                       isLoadingFavs: true,//Checks to see whether or not anything exists in the Favourites section. 
                       favItems: [] //Array of favourited Items.
        }
    }
    
    //This handler determines the value of the searchApp state.
    handleSearchChange(e){
      this.setState({searchApp: e.target.value});
    }
    
    //This handler determines the value of the mediaApp state. 'all' is selected by default.
    handleMediaChange(e){
      this.setState({mediaApp: e.target.value});
    }

    getSearch(e) {
        e.preventDefault();
        this.setState({isLoadingSpinner: true})
        fetch(`/search/?term=${this.state.searchApp}&media=${this.state.mediaApp}`, { //First argument is the route/endpoint.
          //Second argument is our init object(req), which will be sent to the server (Express).
                method: "GET", //Add item to the array declared in Express.
                headers: {
                    "Content-Type": "application/json" //The type of data that will be sent to server = JSON.
                }
                //body: JSON.stringify({ term: this.state.searchApp, media: this.state.mediaApp }),
                //All relevant state is sent to server inside the body of the init object.
            }).then(res => res.json()) //Parse to JS
            .then(response => {
              console.log(response.item); //Store array in variable.
              const resArr = response.item;
              this.setState({
                searchItems: resArr,//app.get sends array to frontend and is saved in state
                isLoading: false,
                isLoadingSpinner: false
          });
        })
            .catch(error => console.log('Error:', error));
    }

    addToFavs(item, e){
        e.preventDefault(); // Stops the button from refreshing the page,so basically stops the buttons default behaviour.
        let arr = this.state.favItems;
        let trackId = item.trackId;
        
        let flag = 0;
        for(let i = 0; i < arr.length; i++){
          if(trackId === arr[i].trackId){
            flag = 1;
            break;
          };
        }
        if(flag === 0){
          arr.push(item); 
        //Item is pushed into favItems. 
        this.setState({
            favItems: arr, //Item is pushed into favItems. 
            isLoadingFavs: false //isLoading state changes. 
        });
        } else {
          alert('No duplicates may be added to Favourites')
        }
        // Store favourited items in variable arr.
    }


    deleteSelectedItem(index){ // Deletes selected list item from Favourites.
        let arr = this.state.favItems;
        arr.splice(index, 1);
        this.setState({
          favItems: arr
        })
    }
    
    render() {
        //Store state in render().
        const { searchApp, mediaApp, searchItems, favItems, isLoadingFavs, isLoadingSpinner } = this.state;
        if(favItems.length !== 0){
            console.log('favItems :' + favItems[0].kind)
        }
        
        //mediaTypes array.
        const mediaTypes = [
                'movie',
                'podcast',
                'music',
                'musicVideo',
                'audiobook',
                'shortFilm',
                'tvShow',
                'software',
                'ebook',
                'all',
            ];

        //Generate information for dropdown.
        const allMedia = mediaTypes.map(item => {
           return(
            <option key={item}>{item}</option>
           ) 
        });

        //Build the items once the user has searched for something.
        console.log(searchItems);
        let itemList = []; //Make the array exit before if.
        if(!(this.state.isLoading)){ //?
            
            itemList = searchItems.results.map((item, index) => { 
            return(
                <Item 
                item = {item}
                key = {index}
                addToFavs = {this.addToFavs}
                />
            )
            })
        
        }
        
        //What is renedered:
        return(
           <div>
              <Display />
              <Navbar bg="light" expand="lg">
                <Navbar.Collapse id="navbarScroll">
                  <Form bg="dark" className="d-flex" onSubmit={this.getSearch}>
                      <FormControl bsPrefix="form1"
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        value={searchApp}
                        onChange={this.handleSearchChange}
                      />
                      <Form.Select bsPrefix="form2" aria-label="Default select example" onChange={this.handleMediaChange} value={mediaApp}>
                        {allMedia}
                      </Form.Select>
                      <Button bsPrefix="buttnav" variant="outline-success" onClick={this.getSearch}><b>Search</b></Button>
                  </Form>
                  <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                  >
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Container className="container">
                <Row>
                    <Col sm={10} className="spinner">
                      {isLoadingSpinner? 
                          <Spinner className="" animation="border" role="status">
                            <span className="visually-hidden">Loading...</span> {/*Renders spinner animation depending on isLoadingSpinner state*/}
                          </Spinner> 
                          : 
                          <div>{itemList}</div>}
                    </Col>
                    <Col sm={2}>
                        <h5>Favourites</h5> {/*Instance of Favourites components*/}
                        <Favourites 
                         favItems={favItems}
                         isLoadingFavs={isLoadingFavs} 
                         deleteSelectedItem={this.deleteSelectedItem}
                        />
                    </Col>
                </Row>
              </Container> 
            </div> 
        )
    };
};


export default Main; //Export Component Main. :)