import { useState, useEffect, createContext, useContext } from 'react'

export const MyContext= createContext();

export const MyProvider =({children}) => {
	const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
	const [searchTitle, setSearchTitle] = useState('')


	const fetchData = async () => {

		const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '83324af858mshdc65ab5c096b56fp1558c3jsn252fdcc2937e',
				'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
			}
		};
		
	
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			setData(result.items)
            
            if (!response.ok) {
                setError(data.status_message + response.status)
            }
             setLoading(false);

        } catch (error) {
            console.error(error)
            setLoading(false);
        }


	}


	useEffect(() => {
        fetchData()
    }, []);

	return (
		<MyContext.Provider value={{data,loading,error,searchTitle , setSearchTitle}}>
		{children}
	</MyContext.Provider>)
} 













// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': '83324af858mshdc65ab5c096b56fp1558c3jsn252fdcc2937e',
// 			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 		}
// 	};
//     const fetchData = async () => {
//         try {
// 			const response = await fetch(url, options);
// 			const result = await response.text();
// 			console.log(result);
            
//             if (!response.ok) {
//                 setError(data.status_message + response.status)
//             }
//             setData(data);
//             setLoading(false);

//         } catch (error) {
//             console.error(error)
//             setLoading(false);
//         }
//     }
//     useEffect(() => {
//         fetchData()
//     }, [url]);

//     return { data, loading, error }
// }

// export default MyContext;



