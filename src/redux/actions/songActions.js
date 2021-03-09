

export const GET_ALL_SONG="GET_ALL_SONG";

export const SELECTED_SONG="SELECETED_SONG";


export const getAllSong=()=>
{
    return {

        type:GET_ALL_SONG,

    }
}

export const selectSong=(name,duration,link)=>
{
    
    return {
        type:SELECTED_SONG,
        name:name,
        duration:duration,
        link:link

    }
}

