class SeerrBadge extends HTMLElement {
    connectedCallback() {
        const img = document.createElement("img");
        img.src = "https://seerr.dev/os_logo_filled.svg";
        img.alt = "Seerr badge";
        img.className = "seerr-badge";

        this.appendChild(img);
    }
}

customElements.define("seerr-badge", SeerrBadge);

class GitHubBtn extends HTMLElement {
    connectedCallback() {
        const img = document.createElement("img");
        img.src = "https://user-images.githubusercontent.com/33416429/92813512-27f0bb80-f376-11ea-8562-ee2b3e416aec.png";
        img.alt = "Available on GitHub";
        img.className = "client-btn";

        this.appendChild(img);
    }
}

customElements.define("github-btn", GitHubBtn);

class AppStoreBtn extends HTMLElement {
    connectedCallback() {
        const img = document.createElement("img");
        img.src = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
        img.alt = "Download on the App Store";
        img.className = "client-btn";

        this.appendChild(img);
    }
}

customElements.define("app-store-btn", AppStoreBtn);