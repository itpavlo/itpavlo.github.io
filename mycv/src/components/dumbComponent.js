import {memo} from 'react';

const DUmbComponent = ({name}) => {
    console.log('DUMB!!!!!')
    return (
        <>
           <h1>{name}</h1>
        </>
    )
}
export default memo(DUmbComponent)
