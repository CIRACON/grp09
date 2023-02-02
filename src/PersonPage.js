//use useParams 
import { useParams } from 'react-router-dom';

export function PersonPage() {
    const params = useParams()

// yuo can find all params from here
console.log(params.id)

    return (
        <div>
            I am a person
        </div>
    )
}