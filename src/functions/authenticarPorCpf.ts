import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function authenticarPorCpf(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {

    let client = {
        id: 2,
        name: "client function",
        cpf: "11122233344",
        email: "clientfunction@azure.com"
    }

    return { body: JSON.stringify(client) };
};

app.http('authenticarPorCpf', {
    methods: ['GET'],
    authLevel: 'function',
    handler: authenticarPorCpf
});
