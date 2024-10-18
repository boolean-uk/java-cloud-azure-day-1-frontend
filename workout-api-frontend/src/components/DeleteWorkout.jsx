import { useState, useEffect } from 'react';
import '../styles/deleteWorkout.css';

const DeleteWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:5000/v1/workouts');
        const data = await response.json();
        setWorkouts(data);
      } 
      catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };
    fetchWorkouts();
  }, []);

  const handleDelete = async () => {
    if (selectedWorkout) {
      try {
        const response = await fetch(`http://localhost:5000/v1/workouts/${selectedWorkout.id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Workout deleted successfully!');
          setWorkouts(workouts.filter(workout => workout.id !== selectedWorkout.id)); 
          setSelectedWorkout(null); 
        } 
        else {
          alert('Failed to delete workout');
        }
      } 
      catch (error) {
        console.error('Error deleting workout:', error);
      }
    }
  };

  return (
    <div className="delete-workout-container">
      <h2>Delete Workout</h2>
      {workouts.length > 0 ? (
        <ul className="workout-list">
          {workouts.map((workout) => (
            <li
              key={workout.id}
              className={`workout-item ${selectedWorkout && selectedWorkout.id === workout.id ? 'selected' : ''}`}
              onClick={() => setSelectedWorkout(workout)}
            >
              {workout.workoutType}
            </li>
          ))}
        </ul>
      ) : (
        <p>No workouts found.</p>
      )}
      {selectedWorkout && (
        <div className="delete-action">
          <p>
            Selected Workout: <strong>{selectedWorkout.workoutType}</strong>
          </p>
          <button onClick={handleDelete}>Delete Workout</button>
        </div>
      )}
    </div>
  );
};

export default DeleteWorkout;
