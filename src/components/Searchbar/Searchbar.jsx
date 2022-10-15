
import { useState} from 'react';
import {ImSearch} from 'react-icons/im'
import {DivSearchBar,FormStyle,ButtonStyle,SpanStyle,InputStyle} from './SearchBarStyle'
// import PropTypes from 'prop-types';
 const  Searchbar =({onSubmit})=> {
const [query, setQuery] = useState ('')
 

// Searchbar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };


  const handelNameChange = event =>{
    setQuery(event.target.value.toLowerCase());
   }

 const  handleSubmit = event =>{
    event.preventDefault();
if(query.trim()=== '' ){
  alert('Введіть пошук фото')
  return;
}

   onSubmit(query)
    
   }

   
    //  const {query}= this.state
    return(
      <DivSearchBar>
      <header>
      <FormStyle onSubmit={handleSubmit}>
        <ButtonStyle type="submit">
        <ImSearch style={{marginRight:8}}/>
          <SpanStyle >Search</SpanStyle>
        </ButtonStyle>
    
        <InputStyle
        name='query'
          type="text"
          placeholder="Search images and photos"
          value={query}
          onChange ={handelNameChange}
          />
         
        </FormStyle>
      </header> 
      </DivSearchBar>
     )
   
   
  }

  export default Searchbar;
 
   
     
     
  
  
             
             