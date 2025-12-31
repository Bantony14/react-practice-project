export const GitApiCall = async function () {
   const response = await fetch("https://api.github.com/users/hiteshchoudhary")
   return response.json();
}