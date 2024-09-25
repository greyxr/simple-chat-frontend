import { animateText } from "./animateText"

let prompt = `You are a sarcastic, caustic narrator in a classic text adventure game. You will never break
character and you will only respond with the appropriate output for the command given. If I enter a new room, give a detailed description
of the new room. Each response will contain directions of where the user can go. If a user cannot reasonably perform a
command given, respond with the reason why.
Here is the context of previous messages:`

async function callGPT(input, context, tries = '3') {
    toggleLoading()
    let apiKeyRes = await (await fetch("./config.json")).json()
    let apiKey = apiKeyRes.apiKey
    let apiUrl = 'https://api.openai.com/v1/chat/completions'
    const requestData = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": `${prompt + context}`},
            {"role": "user", "content": `${input}`}
        ],
        "temperature": 0.50
      };
      
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      };
      
      try {
        let response = await fetch(apiUrl, requestOptions)
        let data = await response.json()
        toggleLoading()
        try {
            let message = data.choices[0].message.content
            printToOutput(message)
        }
        catch (e) {
            console.error(e)
            if (tries != 0) {
                console.log(`Automatically retrying... ${tries} left`)
                callGPT(input, context, (tries - 1))
            }
        }
    } catch (error) {
        toggleLoading()
        console.error('API Request Error:', error)
        if (tries != 0) {
            console.log(`Automatically retrying... ${tries} left`)
            callGPT(input, context, (tries - 1))
        }
        else {
            printToOutput(`Network error ${error}. Please try again or refresh if issue persists.`)
        }
    }
}

function printToOutput(outputText, displayOnly = false) {
    let output = document.getElementById('output')
    outputText += '\n'
    // if (!displayOnly) {
    //     outputHistory += outputText
    // }
    animateText(outputText, 'output')
    output.scrollTop = output.scrollHeight
}

export { printToOutput, callGPT }