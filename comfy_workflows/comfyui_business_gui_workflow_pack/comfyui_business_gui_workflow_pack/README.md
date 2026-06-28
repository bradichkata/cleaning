# ComfyUI Business GUI Workflow Pack

This pack converts the previous business-asset pack into **drag-and-drop ComfyUI GUI workflows**.

## Folders
- `gui_reusable/` → edit-ready base workflows
- `gui_randomizable/` → GUI workflows that are prewritten to encourage diversification with randomized seeds and broader prompt logic

## What these files are
These are exported-style ComfyUI workflow JSON files intended to be imported directly into ComfyUI by drag-and-drop.

## Important honesty note
- These workflows are built to be portable and rely on standard core nodes.
- Because true structured prompt randomization usually depends on custom nodes, the `gui_randomizable` files use a compromise: they randomize via seed and broader prompt instructions instead of relying on a specific custom-node pack.
- If your ComfyUI version or node naming differs, you may need tiny adjustments.

## How to use
1. Drag a JSON file into ComfyUI.
2. Replace `replace_with_your_model.safetensors` with your installed checkpoint.
3. Edit the positive prompt placeholders like `{{business_name}}`, `{{brand_colors}}`, and others.
4. For the image-processing workflow, replace `replace_with_input_image.png` with your input image.
5. Run the graph.

## Best next step
If you want the strongest long-term automation, I can build a **third pass** specifically for your installed custom nodes (for example WAS Node Suite, Impact Pack, rgthree, Comfyroll, etc.). That would allow more real one-click randomization, switch-like prompt routing, and better batch diversification.