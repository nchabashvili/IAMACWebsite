//footer component
const footerContent = `
    <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <ul>
            <li><a href="https://www.instagram.com/iamac_architects/">INSTAGRAM</a></li>
        </ul>
    </footer>
`;

// Inject the footer into the page
document.addEventListener("DOMContentLoaded", function () {
  document.body.insertAdjacentHTML("beforeend", footerContent);
});
