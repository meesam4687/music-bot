module.exports = {
    name: "stop",
    aliases: ["disconnect", "leave"],
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`There is nothing in the queue right now!`).catch(console.error)
        client.distube.stop(message)
        message.channel.send(`Stopped!`).catch(console.error)
    }
}