import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faPlusCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/navigation.css';

const Navigation = ({ setActiveComponent }) => {

    const navItems = [
        { id: 0, name: "Workouts", icon: faDumbbell },
        { id: 1, name: "Add Workout", icon: faPlusCircle },
        { id: 2, name: "Update Workout", icon: faEdit },
        { id: 3, name: "Delete Workout", icon: faTrash }
      ];

    return (
        <nav className="nav">
            <ul className="nav-list">
                { navItems.map((item) => (
                    <li 
                        key={item.id} 
                        className="nav-item"
                        onClick={() => setActiveComponent(item.id)}
                    >
                        <FontAwesomeIcon icon={item.icon} /> {item.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation