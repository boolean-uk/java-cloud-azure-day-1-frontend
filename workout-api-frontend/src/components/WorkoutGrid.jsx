import '../styles/workoutGrid.css';

const WorkoutGrid = ({workouts}) => {

    if (!Array.isArray(workouts) || workouts.length < 1) return <>No workouts found.</>

    return (
        <div className="grid-container">
            {workouts.map((workout) => (
                <div key={workout.id} className="grid-item">
                    <h2>{workout.workoutType}</h2>
                    <p><strong>Date:</strong> {new Date(workout.workoutDate).toLocaleDateString()}</p>
                    <h3>Exercises:</h3>
                    <ul>
                        {workout.exercises.map((exercise) => (
                            <li key={exercise.id}>
                                <p><strong>{exercise.name}</strong></p>
                                <p>Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weightInKg} kg</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default WorkoutGrid;