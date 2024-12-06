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

### 7. **Accessibility**:
   - Add ARIA attributes or descriptive labels for the input and button to improve accessibility.A

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