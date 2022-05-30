import './App.css';
import { Gentelman } from '../gentelman';
import { arrayGentelman } from '../../models/data';
import { Button } from '../button';
import { useState } from 'react';
import { Info } from '../info';

function App() {
    const [gentlemen, updateGentlemen] = useState(arrayGentelman); // va a devolver [x, y]

    return (
        <div className="App">
            <Info></Info>
            <div className="container">
                <main className="main">
                    <ul className="gentlemen">
                        {gentlemen.map((item) => {
                            return (
                                <Gentelman
                                    gentelman={item}
                                    key={item.id}
                                ></Gentelman>
                            );
                        })}
                    </ul>
                </main>
            </div>
        </div>
    );
}

export default App;
