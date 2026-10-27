
Visit `http://localhost:8000` to see the boot sequence and interface. Note that API calls to the Cloudflare Worker may require CORS configuration or direct deployment testing.

### Deploying Changes
1. Push changes to your fork or branch.
2. Ensure `wrangler.toml` is configured correctly for your Cloudflare account if modifying backend logic.
3. Merge to `main` to trigger GitHub Pages deployment automatically.

## 🔒 Security & Privacy
*   **Turnstile Integration:** All critical access points are protected against automated scripts.
*   **No PII Storage:** Frontend does not store sensitive personal information; state is managed locally or via secure session tokens where applicable.
*   **Open Source Transparency:** Code is publicly available for auditability.

## 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

Please ensure all new components adhere to the existing **Design Token** system in `Style.css` to maintain visual consistency.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. *(Note: Add LICENSE file if missing)*

---
**Built with ❤️ by the TextNexus Team.**  
*Nexus OS // Edition X — Where Systems Meet Simplicity.*
