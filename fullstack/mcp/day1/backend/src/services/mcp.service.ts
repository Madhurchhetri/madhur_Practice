import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";

let client : Client;

export const getMcpClient = async()=>{
    const transport = new StdioClientTransport({
        command:"npx",
        args:['tsx' , "../mcp_server/src/index.ts"]
    });

    client = new Client({
        name:"tiny-cats-client",
        version: "1.0.0"
    });

    await client.connect(transport);

    return client;
};