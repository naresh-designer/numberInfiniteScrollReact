import { useEffect, useState } from "react"


const MovieComponent = () => {

    const [count,setCount] = useState(50)

    useEffect(() => {

        const onScroll = () => {
            if(window.innerHeight + window.scrollY >= window.document.documentElement.offsetHeight){
                setCount(count + 50)
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll) 
    }, [count] )

    const element = []

    for(var i = 0; i < count; i++){
        element.push(<div key={i} >{i + 1}</div>)
    }

  return (
   <main>
    {element}
   </main>
  )
}

export default MovieComponent