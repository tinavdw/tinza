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
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    };
  } catch(e) {
    return {
      statusCode: 500,
      body: JSON.stringify({error: e.message})
    };
  }
};
