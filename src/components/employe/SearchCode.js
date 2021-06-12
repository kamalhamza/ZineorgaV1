import React,{ useState } from 'react'
import { Link,useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

const SearchCode = () => {
    
    const history = useHistory();
    const [search, setSearch] = useState(0);
    return (
        
        <Paper component="form" className='root'>
      <InputBase
      style={{marginLeft:10}}
      className='input'
        placeholder="Code"
        inputProps={{ "aria-label": "Code" }}
        onChange={(e)=>setSearch(e.target.value)}
      />
      
      <IconButton type="button" aria-label="Chercher" className='iconButton' 
      component={Link} to={`/code/${search}`}>
        <SearchIcon style={{color:"#18a4bc"}}/>
      </IconButton>
      <Divider orientation="vertical" />
    </Paper>
    )
}

export default SearchCode
