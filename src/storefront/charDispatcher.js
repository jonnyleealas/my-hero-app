import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import * as actions from "../store/characterActions.js";


export default function CharacterDispatcher() {
  
  const dispatch = useDispatch();

  const charState = useSelector((state) => state.characterCombiner);
  console.log('why lord why',charState)


  // function handleClick(item) {
  //   dispatch(actions.getCharacters(item));
  // }

  useEffect( () => {
    dispatch(actions.getCharacters());
  }, []);


  return(
    <>
      <h2>My Heroes and Quirks </h2>
        <ul>
          {charState.map((item)=>
            <li key={item.id}>
              {item.name}
            </li>
             )}
        
        </ul>
    </>
)
}
