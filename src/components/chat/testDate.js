
export const testDate = () => {
    const Random = i => Math.floor( Math.random()*i );
    const name = ['my', 'aa', 'bb', 'cecece', 'kes'];

    const testMessages = [];
    for(let i=0;i<20;i++){
        testMessages.push({
            id: i,
            author: name[Random(5)],
            type: 'text',
            sender: `ico ${Random(10)}`,
            data: {
                text: Random(2)?
                    'some text':
                    randomString(Random(10) * Random(20) * Random(20) )
            }
        })
    }
    return testMessages;
}

export const  randomString = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOP RSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}