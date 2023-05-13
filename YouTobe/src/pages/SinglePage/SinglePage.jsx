import { MyContext } from "../../Hooks/Usefetch"
import { useContext } from "react"
import { Link,  useParams } from "react-router-dom";
const SinglePage = () => {
    const {data,loading,searchTitle} = useContext(MyContext);
    console.log(data);


  return (
    <>
    <div>
        <div>
            <iframe className="w-[900px] m-auto my-5 h-[900px]" src={`https://www.youtube.com/embed/${data[2]?.id?.videoId}`} frameborder="0"></iframe>

        </div>
    </div>
    </>
  )
}

export default SinglePage