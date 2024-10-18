import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
import WorkoutGrid from './components/WorkoutGrid';
import CreateWorkout from './components/CreateWorkout';
import UpdateWorkout from './components/UpdateWorkout';
import DeleteWorkout from './components/DeleteWorkout';

import './App.css';

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [activeComponent, setActiveComponent] = useState(0);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:5000/v1/workouts');
      if (response.ok) {
        const data = await response.json();
        setWorkouts(data);
      }
    }
    fetchWorkouts();
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 1: return <CreateWorkout />
      case 2: return <UpdateWorkout />
      case 3: return <DeleteWorkout />
      default: return <WorkoutGrid workouts={workouts} />
    }
  }


  return (
    <div className="App">
      <Navigation setActiveComponent={setActiveComponent}/>
      <main className='main'>
        {renderComponent()}
      </main>
    </div>
  );
}

export default App;
