Welcome to my gallery creating "plugin"

## What it does?
Plugin transform HTML structure (based on div element and its children elements) into gallery.

  <div class="elements-list" id="slider1">
    <article class="element">
        <h2 class="element-title">
            1 Lorem ipsum dolor sit.
        </h2>
        <div class="element-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </div>
    </article>
  </div>

You can chouse between slider (Slider), accordion (Accordion), tab gallery (TabGallery) and 3D gallery (Gallery3D).
Backgrounds of the gallery are placed in script file as an array. You can apply background randomly or in sequence.

## Creating gallery
Let's say you want to create slider. Creating it is simple as that:
const mySlider = new Slider('elementSelector', {options});
Default options you will find in the constructor of each Class.

## CSS
Styles are made to be universal and fit in with dark and bright backgrounds. But feel free to change and modify accordingly to your preferences ;).