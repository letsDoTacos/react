import React, { useReducer, useState } from 'react';

function startPlusOne(num) {
  console.log('start plus one has been called');
  return num + 1;
}

// actions, dispatch and, reducers 
function personReducer(state, action) {
  console.log(state, action);
  if(action.type === 'NAME_CHANGE') {
    return {...state, name: action.name };
  } else if(action.type === 'JOB_CHANGE') {
    return {...state, occupation: action.occupation };
  }
  return state;
}


const BtnToClk = () => {
  const [count, setCount] = useState(() => startPlusOne(0));
// useState()
  // const [person, setPerson] = useState({
  //   name: 'jp',
  //   occupation: 'Devloper'
  // });

// actions, dispatch and, reducers 
  const [newPersone, dispatchPerson] = useReducer(personReducer, {
    name: 'Courtney', occupation: 'LCLSW'
  });

  function addOne() {
    setCount(count + 1);
  }
// useState()
  // function changeToJohn () {
  //   setPerson((oldValue) => {
  //     console.log('Old Job',oldValue);
  //     return {
  //     name: 'John',
  //     occupation: 'SWPPP Inspector'
  //     }
  //   });
  // }


// actions, dispatch and, reducers 
  function updateReducerName() {
    dispatchPerson({ type: 'NAME_CHANGE',name: 'Avery' })
  }
  
  function updateReducerJob() {
    dispatchPerson({ type: 'JOB_CHANGE', occupation: 'CEO' })
  }

  return console.log('Rendering') || (
    <div>
      <h1>Working with React's useState and reducers</h1>
      <h2>The count: { count }</h2>
      <h3>Name: { newPersone.name }</h3>
      <h3>Job: { newPersone.occupation }</h3>


      <button onClick={ addOne }>Add One</button>
      <button onClick={ updateReducerName }>Change Courtney</button>
      <button onClick={ updateReducerJob }>Change Job</button>
    </div>
  )
};

export default BtnToClk;