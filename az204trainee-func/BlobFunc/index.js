const { CosmosClient } = require("@azure/cosmos")

module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
    console.log(myBlob);
    
    const endpoint = "https://satrainee12.documents.azure.com:443/";
    const key = "";
    const client = new CosmosClient({ endpoint, key });

    const { database } = await client.databases.createIfNotExists({id: "UserFeedback"});
    const { container } = await database.containers.createIfNotExists({id: "user_feedback"})

    console.log(container);
    
    // To Do : Do your traitements
    context.bindings.myOutputBlob = myBlob;
};