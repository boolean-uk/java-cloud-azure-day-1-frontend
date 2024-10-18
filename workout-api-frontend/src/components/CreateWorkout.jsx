import { useState } from 'react';
import '../styles/createWorkout.css';  

const CreateWorkout = () => {
  const [workoutType, setWorkoutType] = useState('');
  const [workoutDate, setWorkoutDate] = useState('');
  const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '', weightInKg: '' }]);

  const handleExerciseChange = (index, e) => {
    const updatedExercises = [...exercises];
    updatedExercises[index][e.target.name] = e.target.value;
    setExercises(updatedExercises);
  };

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', sets: '', reps: '', weightInKg: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workoutData = {
      workoutType,
      workoutDate,
      exercises,
    };

    try {
      const response = await fetch('http://localhost:5000/v1/workouts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workoutData),
      });

      if (response.ok) {
        alert('Workout created successfully!');
        setWorkoutType('');
        setWorkoutDate('');
        setExercises([{ name: '', sets: '', reps: '', weightInKg: '' }]);
      } 
      else {
        alert('Failed to create workout');
      }
    } 
    catch (error) {
      console.error('Error creating workout:', error);
    }
  };

  return (
    <div className="create-workout-container">
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Workout Type:</label>
          <input
            type="text"
            value={workoutType}
            onChange={(e) => setWorkoutType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Workout Date:</label>
          <input
            type="datetime-local"
            value={workoutDate}
            onChange={(e) => setWorkoutDate(e.target.value)}
            required
          />
        </div>

        <h3>Exercises</h3>
        {exercises.map((exercise, index) => (
          <div key={index}>
            <label>Exercise Name:</label>
            <input
              type="text"
              name="name"
              value={exercise.name}
              onChange={(e) => handleExerciseChange(index, e)}
              required
            />
            <label>Sets:</label>
            <input
              type="number"
              name="sets"
              value={exercise.sets}
              onChange={(e) => handleExerciseChange(index, e)}
              required
            />
            <label>Reps:</label>
            <input
              type="number"
              name="reps"
              value={exercise.reps}
              onChange={(e) => handleExerciseChange(index, e)}
              required
            />
            <label>Weight (kg):</label>
            <input
              type="number"
              name="weightInKg"
              value={exercise.weightInKg}
              onChange={(e) => handleExerciseChange(index, e)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddExercise}>
          Add Exercise
        </button>
        <button type="submit">Create Workout</button>
      </form>
    </div>
  );
};

export default CreateWorkout;
