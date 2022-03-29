import {useSelector} from 'react-redux';

function ElementList() {
    // grab the elementList from the redux store
    const elementList = useSelector(store => store)

    return (
        <ul>
            {elementList.map((element,i) => (
                <li key={i}>{element}</li>
            ))}
        </ul>

    )

}

export default ElementList

