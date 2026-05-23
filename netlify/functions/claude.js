exports.handler = async function(event) {
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: event.body
    });
    const text = await response.text();
    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      body: text
    };
  } catch(e) {
    return {
      statusCode: 500,
      headers: {"Access-Control-Allow-Origin": "*"},
      body: JSON.stringify({error: e.message})
    };
  }
};
