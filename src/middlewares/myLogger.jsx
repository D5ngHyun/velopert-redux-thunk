const myLogger = store => next => action => {
    const result = next(action);


    // console.log('\t', store.getState())
    return result;
}

export default myLogger;