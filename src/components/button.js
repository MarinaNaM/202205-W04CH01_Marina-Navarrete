export function Button({ tag, classes, content }) {
    // handlerSelectAll(){

    // }

    return (
        <>
            {tag === 'button' ? (
                <button className={classes}>{content}</button>
            ) : (
                <i className={classes}>{content}</i>
            )}
        </>
    );
}
