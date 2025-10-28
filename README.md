# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Screenshot

![Screenshot preview](./images/desktop-preview.jpg)

## Links

- [Repository URL](https://github.com/MATBMS/article-preview-component)
- [Live site URL](https://matbms-article-preview-component.netlify.app/)

## Built with

- HTML, CSS, JavaScript

## What I learned

### Manipulating DOM elements through class toggling

This is my first project incorporating JavaScript to manipulate DOM elements through class toggling. This fundamental technique opens the door to creating interactive user interfaces and dynamic content.

Key takeaways:

- DOM manipulation using `classList` methods
- Event handling for user interactions
- Toggling visual states through CSS classes

### rel="noopener noreferrer"

I learned about the importance of using `rel="noopener noreferrer"` with external links that open in new tabs to avoid security vulnerabilities:

- **Security Protection**: `noopener` prevents malicious sites from accessing the original window through `window.opener`, protecting against tabnabbing attacks
- **Privacy Protection**: `noreferrer` prevents the external site from knowing where the user came from by hiding the referer header
- **Best Practice**: Always use both attributes together when linking to external sites with `target="_blank"`

```html
<!-- Secure external link -->
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>
```
