import './App.css';
import { Gentelman } from '../gentelman';
import { arrayGentelman } from '../../models/data';

function App() {
    return (
        <div className="App">
            <main className="main">
                <ul className="gentlemen">
                    {arrayGentelman.map((item) => {
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
    );
}

export default App;
