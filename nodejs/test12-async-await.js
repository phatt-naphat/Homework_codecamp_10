function showText(text, time) {
    return new Promise( (rs, rj) => {
        setTimeout( () => {
            console.log(text)
            rs()
        }, time)
    })
}

async function runText() {
    try {
    await showText('1', 1000);
    await showText('2', 1000);
    await showText('3', 1000);
    await showText('4', 1000);
    console.log('Done')
    } catch {
        console.log(err);
    }

}

runText();

// showText('1', 1000)
// .then ( () => { return showText('2', 1000) })
// .then ( () => { return showText('3', 1000) })
// .then ( () => { return showText('4', 1000) })
// .then ( () => console.log ('Done'))
