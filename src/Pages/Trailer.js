import React, {useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import { moviesData } from '../Components/Data';
// use params 
const Trailer = () => {
  const { id } = useParams();
  console.log(id);
//const match = useParamas("/:id")
//const movie = moviesData.find((el) => el.id === match.params.id)
const [ data , setData ] = useState({})
  useEffect(() => {
    const movieT = moviesData.find((el) => el.id == id);
    setData(movieT);
  }, [id])
  return (
    <div>
    <iframe src={data.trailer} title="trailer" allowfullscreen width="1340px" height="500px"/>
    </div> 
  )
}

export default Trailer