# Jeffrey Kim Website

This is my biography website. The website features a responsive design with a photo gallery, styled sections, and dynamic content loading using Vue.js.

## Features

- Responsive header with navigation menu items.
- Sticky header on scroll.
- Dynamic photo gallery with thumbnails that expand on click.
- Two-column article sections that adjust responsively to screen size.
- Custom styles for `h1` and `p` tags.
- Vue.js integration for fetching and displaying lifestyle content.
- JSON fetching DOM manipulation.
- API integration for meme gallery.
- Dynamic form for a simple messaging.
- Openstreet map.

## Structure

- `index.html` - The main HTML document.
- `lifestyle.html` - The lifestyle section of the website. Vue.js-driven photo gallery.
- `style.css` - The stylesheet containing all the custom styles for the website.
- `model.js` - The script providing the data model for the lifestyle and profile section. Resume for profile use, consists a simple MVC architecture.
- `lifestyle-component.js` - The Vue.js component script for dynamic content rendering.
- `header.js` and `footer.js` - Scripts for the header and footer sections.
- 'project.html' - standalone JSON fetching.
- 'contents.html' - standalone public API integration.

## Style Guide

- Headers (`h1`) are colored with `#31304D`.
- Paragraphs (`p`) are styled with the default black color.
- Photo thumbnails have a fixed height of 300px and expand to a maximum height of 600px upon click.
- Thumbnails and expanded photos have a 10px white frame and soft shadow for styling.
- Article sections are divided into left and right sections with a responsive design.

## Form Usage

To contact the author, use the form to send the message.

## Development

To modify the content, edit the `model.js` file and update the Vue.js component in `lifestyle-component.js` as necessary.

## Styles

The `style.css` file contains all the custom styles. Update it to change the appearance of different elements on the website.

## Author

Jihn Kim

