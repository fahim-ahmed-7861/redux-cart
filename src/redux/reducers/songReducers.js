import { GET_ALL_SONG, SELECTED_SONG } from "../actions/songActions"
import { decrement } from "../actions/StateCounterActions";




const initialState={

    AllSong:[{
        name:"TU JANE NA",
        duration:'5min',
        link:'https://www.youtube.com/watch?v=P8PWN1OmZOA'
    },
    {
        name:"Tu hi tu",
        duration:'3min',
        link:'https://www.youtube.com/watch?v=Umqb9KENgmk'
    },
    {
        name:"TUM HI HO",
        duration:'1min',
        link:'https://www.youtube.com/watch?v=Umqb9KENgmk'
    },
    {
        name:"ASHIQ BANAYE",
        duration:'12min',
        link: 'https://www.youtube.com/watch?v=0bAVd9jJE2Q'
    },
    {
        name:"AHA AMI",
        link:'https://www.youtube.com/watch?v=CRHIBZ72nMY',
        duration:'2min'
    },

]

}

export const songReducers=(state=initialState,action)=>
{
     switch(action.type)
     {
         case GET_ALL_SONG:
             return state;
        
        default :

        return state;
     }
}

const selectState={

    name:'',
    duration:'',
    link:''
}

export const selectSongReducers=(state=selectState,action)=>
{

   

   switch(action.type)
   {
       case SELECTED_SONG:
           return {
               name : action.name,
               duration:action.duration,
               link:action.link
           }
       
       default : return state;
   }
}



//export default {songReducers};
