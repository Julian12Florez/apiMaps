io.on('connection', (client)=> {

    console.log("Ingreso un usuario ", client.id);
    client.on("mensaje", (msg)=>{

        //io.to("1Mm8IrzjXpqQPqwkAAAG").emit("nuevo", msg);
    });

    client.on("disconnect", ()=>{
        console.log("Alguien se fue", client.id);
    });
})