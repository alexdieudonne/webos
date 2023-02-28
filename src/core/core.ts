// const appState = {
//     time: {
//         hours: true,
//         minutes: true,
//         seconds: true
//     },
//     date: {
//         show: true,
//         year: true,
//         month: true,
//         day: true
//     },
//     battery: {
//         show: true
//     },
//     latency: {
//         show: true,
//         domain: 'https://google.fr',
//         delay: .4
//     }
// }
export async function storeSessionState(item: string) {
    let itemArr: string[] = [];
    const oldArray = await retrieveStoreSessionState();
    if(oldArray){
        itemArr = oldArray
    }
    itemArr.push(item)
    sessionStorage.setItem('calculator', JSON.stringify(itemArr))
}

export async function retrieveStoreSessionState(): Promise<Array<string> | null> {
    try {
        return JSON.parse(sessionStorage.getItem('calculator')?? "")
    } catch (error) {
        return []
    }
    
}
