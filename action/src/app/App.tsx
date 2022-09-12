import { useEffect, useState } from 'react';
import Item from '../item/Item';
import './App.css';

export default function App() {
    const [activeItems, setActiveItems] = useState<string[]>();
    const [inactiveItems, setInactiveItems] = useState<string[]>();

    useEffect(() => {
        setActiveItems(['League Racing']);
        setInactiveItems(['Normal']);
    }, []);

    function handleClick(activeness: boolean, mode: string) {
        if (activeness === true) {
            setActiveItems(activeItems?.splice(activeItems.indexOf(mode)));
            setInactiveItems(() => {
                inactiveItems?.push(mode);
                return inactiveItems;
            });
        } else if (activeness === false) {
            setInactiveItems(activeItems?.splice(activeItems.indexOf(mode)));
            setActiveItems(() => {
                inactiveItems?.push(mode);
                return inactiveItems;
            });
        }
    }

    return (
        <div className='container'>
            <div className='active-container'>
                <h3 className='active-header'>Active</h3>
                <div className='holder active-holder'>
                    {activeItems?.map((item, index) => {
                        return (
                            <Item
                                mode={item}
                                key={index}
                                activeness={true}
                                handleClick={handleClick}
                            />
                        );
                    })}
                </div>
            </div>
            <div className='inactive-container'>
                <h3 className='inactive-header'>Inactive</h3>
                <div className='holder inactive-holder'>
                    {inactiveItems?.map((item, index) => {
                        return (
                            <Item
                                mode={item}
                                key={index}
                                activeness={false}
                                handleClick={handleClick}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
