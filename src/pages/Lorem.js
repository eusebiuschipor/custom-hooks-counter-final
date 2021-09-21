import useCounter from '../hooks/use-counter';
import Card from '../components/Card';

function Lorem () {
    const lorem = useCounter(true, true);

    return (
        <>
            <Card>
                {lorem}
            </Card>
        </>
    );
}

export default Lorem;