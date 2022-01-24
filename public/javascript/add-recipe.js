async function newRecipeHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="recipe-name"]').value;
    const content = document.querySelector('input[name="url"]').value;
    
    const response = await fetch(`/api/recipes`, {
      method: "Post",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace('/my-recipes');
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector(".add-recipe-form")
    .addEventListener("submit", newRecipeHandler);
  