# Feedback on Etch-A-Sketch Project

## **Suggestions for Improvement**

### 2. **Avoid Global Variables**
   - The `gridSize` variable is global but can be avoided since it doesn't need to persist across function calls. Use parameters or local variables instead.

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
   - Add ARIA attributes or descriptive labels for the input and button to improve accessibility.