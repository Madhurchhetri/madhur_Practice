import { recommendCatsService } from "./cat.service.ts"
import { generateAiResponse } from "./gemini.service.ts";

export const aiRecommendService = async( kidsFriendly : boolean , apartmentFriendly: boolean) =>{
    const matchCatsFromDb = await recommendCatsService(kidsFriendly , apartmentFriendly);

    const prompt = `
You are a professional cat breed expert and pet advisor with extensive knowledge of cat behavior, temperament, grooming, activity levels, and living requirements.

Your task is to compare cat breeds and help the user understand which cat may be a better fit for their lifestyle.

Here is the comparison data:

Kids-Friendly:
${kidsFriendly}

Apartment-Friendly:
${apartmentFriendly}

Based on this data, provide a clear and balanced comparison.

Please include:
1. Which cat is more suitable for families with children.
2. Which cat is more suitable for apartment living.
3. Temperament and personality differences.
4. Energy and activity level.
5. Grooming and care requirements.
6. Which type of owner or lifestyle each cat is best suited for.
7. A final recommendation explaining which cat is the better overall choice and why.

Important instructions:
- Use only the provided data for the comparison.
- Do not invent scores, facts, or characteristics that are not available.
- If any information is missing, clearly mention that it is unavailable.
- Be objective and do not unfairly favor one breed.
- Keep the response friendly, easy to understand, and useful for someone planning to adopt a cat.
- Format the answer with clear headings and bullet points.

Give the final comparison now.
`;

const aiResponse = await generateAiResponse(prompt);

return aiResponse;
}