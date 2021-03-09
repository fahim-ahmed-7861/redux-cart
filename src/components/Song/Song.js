import React from 'react';
import { connect } from 'react-redux';
import { getAllSong, selectSong } from '../../redux/actions/songActions';

const Song = (props) => {

    const {AllSong}=props.allSong;

    console.log(props)

    const {selectedSong,selectSong}=props;


    return (
        <div>

            <h1>Song LIST</h1>

            {
                AllSong.map(
                    s=><div>
                        
                        <button onClick={()=>selectSong(s.name,s.duration,s.link)} >{s.name}</button>
                    </div>
                )
            }

           <h1>SELECTED SONG : </h1>

            <h3>NAME : {selectedSong.name}</h3>

            <h5>duration : {selectedSong.duration}</h5>

            <a href={selectedSong.link}>LINK</a>

            
           
            

         
            
        </div>
    );
};

const mapStateToProps=state=>
{
    console.log('9999',state);

    return {
         allSong : state.songReducers,
         selectedSong  :state.selectSongReducers

    }
}

const mapDispatchToProps=
{
    
       getAllSong  : getAllSong,
        selectSong:selectSong

    
}



export default connect(mapStateToProps,mapDispatchToProps)(Song);