export function Button({ tag, classes, content }) {
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
