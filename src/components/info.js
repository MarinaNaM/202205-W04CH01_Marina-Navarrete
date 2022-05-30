import { arrayGentelman } from '../models/data';
import { Button } from './button';

export function Info() {
    let arrayTrues = [];
    arrayTrues = arrayGentelman.filter((item) => {
        return item.selected === true;
    });
    console.log(arrayTrues.length);

    return (
        <>
            <header className="main-header">
                <h1 className="main-title">The pointing gentlemen</h1>
            </header>
            <section className="controls">
                <p className="info">
                    {arrayTrues.length} gentlemen pointing at you
                </p>
                <Button
                    tag="button"
                    classes="button button--select"
                    content="Select all"
                ></Button>
            </section>
        </>
    );
}
