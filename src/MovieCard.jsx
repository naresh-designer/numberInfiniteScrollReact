

const MovieCard = ({movieData}) => {
  return (
    <main>
        <h1>Infinite Movie Card</h1>
        <div className="card grid grid_three " >


            {
                movieData.map((curElm) => {
                    const { id,title,body}=curElm
                    return(
                        <div key={id} className="card__container">
                            
                        <h3>{title.substr(0,9)}</h3>
                        <p>{body}</p>
                        <p>Read More</p>
                    </div>
                    )
                } )
            }

           
        </div>
    </main>
  )
}

export default MovieCard