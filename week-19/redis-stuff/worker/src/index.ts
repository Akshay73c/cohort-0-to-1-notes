import { createClient } from 'redis'

const client = createClient();

async function main() {
    await client.connect()
    while(1) {
        const response = await client.brPop("submissions", 0)
        console.log(response)
        //actually run the users code docker exec
        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
        //send to pub-sub;
        console.log("Processed userr's submissions")
    }
}


main()