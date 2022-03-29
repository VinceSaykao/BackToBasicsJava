import {useState} from 'react';
import {useDispatch} from 'react-redux';

function ElementForm() {
    const [newElement, setNewElement] = useState('');

    // dispatch is how we talk to redux from react
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        // tell redux we want to add the new element
        dispatch({
            type:'ADD_ELEMENT',
            payload: newElement
        });

        // clear form field
        setNewElement('');
    }


    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placholder="Element Name!"
            value={newElement}
            onChange={event => setNewElement(event.target.value)}
        />
        <button type="submit">Add It</button>

        </form>
    )
}

export default ElementForm;
