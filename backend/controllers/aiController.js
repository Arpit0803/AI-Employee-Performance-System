const axios = require("axios");

const getRecommendation = async (req, res) => {
  try {

    const { employee } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",

            content: `
Analyze this employee and provide:

1. Promotion Recommendation
2. Training Suggestions
3. Performance Feedback
4. Employee Ranking

Employee Data:
${JSON.stringify(employee)}
            `,
          },
        ],
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      result:
        response.data.choices[0].message.content,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getRecommendation,
};