import React from 'react';

const Results = ({ items }) => {
    const ity = items.map(item => {
        return (
            <div className='result-container' key={item.id}>
                <div className='item'>
                    <div><a href={item.homepage}>{item.name}</a></div>
                    <div>{item.description}</div>
                    {item.fork &&
                        <div className='forked'>forked</div>
                    }
                </div>
                <div className='item'>
                    <div>Stars: </div>
                    <div className='value'>{item.stargazers_count}</div>
                </div>
                <div className='item'>
                    <div>License:</div>
                    <div className='value'>{item.license == null ? '' : item.license.name}</div>
                </div>
            </div>
        );
    });

    return <div>{ity}</div>;

}

export default Results;