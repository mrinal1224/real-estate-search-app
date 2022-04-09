import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


// headers: {
//        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//        'X-RapidAPI-Key': 'ed9a3ce707msh66030ed297c30f4p1fd6fajsn46ace3e0cef6'
//      }

export const fetchApi = async (url)=>{
 const response = await axios.get((url) , {
    headers: {
       'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
       'X-RapidAPI-Key': 'ed9a3ce707msh66030ed297c30f4p1fd6fajsn46ace3e0cef6'
     }    
 })
}