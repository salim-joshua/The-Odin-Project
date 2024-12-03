# Feedback on Etch-A-Sketch Project

## **Rating: 8/10**

### **What You Did Well**
1. **Modularity**: 
   - Functions like `generateGrid`, `deleteGrid`, and `generatePixel` break down the task into smaller, reusable components, which enhances readability.
   
2. **Event Handling**:
   - Adding the `mouseover` event listener directly inside the `generatePixel` function is a good touch, keeping the behavior encapsulated.

3. **User Input Validation**:
   - You correctly validate the grid size and provide feedback to the user when the input is invalid.

4. **Flexbox Usage**:
   - Flexbox is applied correctly to create a responsive grid.

5. **Dynamic Styling**:
   - The `calculateSize` function ensures that the grid adjusts dynamically based on the input.

---

## **Suggestions for Improvement**

### 1. **Conciseness**: Combine similar operations or reduce redundancy.
   - Example: Combine `setGridSize` and the event listener for `click` into a single function:
     ```javascript
     setGridSizeBtn.addEventListener("click", () => {
         const size = gridSizeInput.value;
         if (size > 0 && size <= 100) {
             deleteGrid();
             generateGrid(size);
         } else {
             alert("Please enter a grid size between 1 and 100");
         }
     });
     ```

### 2. **Avoid Global Variables**
   - The `gridSize` variable is global but can be avoided since it doesn't need to persist across function calls. Use parameters or local variables instead.

### 3. **Performance**: Batch DOM updates.
   - Creating and appending all the pixels individually can be slow for larger grids. Use a `DocumentFragment` to append all the pixels in one go:
     ```javascript
     function generateGrid(gridSize) {
         const fragment = document.createDocumentFragment();
         for (let i = 0; i < gridSize ** 2; i++) {
             fragment.appendChild(generatePixel(gridSize));
         }
         sketchboard.appendChild(fragment);
     }
     ```

### 4. **Scalability**: Use CSS classes for hover effects.
   - Instead of setting the `backgroundColor` with JavaScript, use a CSS class:
     ```css
     .hovered {
         background-color: white;
     }
     ```
     ```javascript
     pixel.addEventListener("mouseover", () => pixel.classList.add("hovered"));
     ```

### 5. **Validation and Defaults**
   - Set a default value for the input field to reflect the initial grid size:
     ```html
     <input type="number" id="gridsize" value="16">
     ```

### 6. **Naming Conventions**:
   - The function `setGridSize` is slightly misleading since it does more than just setting the size. Rename it to something like `updateGrid`.

### 7. **Accessibility**:
   - Add ARIA attributes or descriptive labels for the input and button to improve accessibility.

### 8. **Error Handling**:
   - Handle edge cases where `gridsizeInput.value` is empty or not a number:
     ```javascript
     const size = parseInt(gridSizeInput.value, 10);
     if (!size || size <= 0 || size > 100) {
         alert("Please enter a valid number between 1 and 100");
         return;
     }
     ```

---

### 9. Opacity Implementation

Start at 0 opacity and then increase by 0.1 every time you hover over it until you reach 1.0:

CSS

.grid {
    opacity: var(--grid_opacity, 0);
}

     ```javascript

const grid = document.querySelector(".grid");

grid.addEventListener("mousenter", incrementGridOpacity);

function incrementGridOpacity(){
    const currOpacity = parseFloat(
        window.getComputedStyle(grid).getPropertyValue("--grid_opacity")
    );
    const opacity = Math.min(currOpacity + 0.1, 1);

    grid.style.setProperty("--grid_opacity", opacity);
}

     ```

---