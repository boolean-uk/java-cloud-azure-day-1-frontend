import { useContext } from "react";
import { GameContext } from "../App";

export function Home() {
    const { videogames } = useContext(GameContext);

    return(
        <ul>
            {videogames.map((game) => {
               return( <li key={game.id}>
                    {game.id} - {game.title} - {game.rating}
                    <span> - Developer: {game.developer.name}</span>                 
                </li>)
            })}
         
        </ul>
    )


}