function observeAndHideWatermark() {
    const widget = document.querySelector("#chainlit-copilot");

    if (widget && widget.shadowRoot) {
      const observer = new MutationObserver(() => {
        const watermark = widget.shadowRoot.querySelector("a.watermark.__web-inspector-hide-shortcut");
        if (watermark) {
          watermark.style.display = "none";
        }
      });

      observer.observe(widget.shadowRoot, { childList: true, subtree: true });
    }
  }

function observeAndHideAdditionalElement() {
    const widget = document.querySelector("#chainlit-copilot");

    if (widget && widget.shadowRoot) {
      const observer = new MutationObserver(() => {
        const additionalElement = widget.shadowRoot.querySelector("div.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible\\:outline-none.focus-visible\\:ring-2.focus-visible\\:ring-ring.focus-visible\\:ring-offset-2.disabled\\:pointer-events-none.disabled\\:opacity-50.\\[\\&\\_svg\\]\\:pointer-events-none.\\[\\&\\_svg\\]\\:size-4.\\[\\&\\_svg\\]\\:shrink-0.hover\\:bg-accent.hover\\:text-accent-foreground.h-10.px-4.py-2");
        if (additionalElement) {
          additionalElement.style.display = "none";
        }
      });

      observer.observe(widget.shadowRoot, { childList: true, subtree: true });
    }
}

observeAndHideWatermark();
observeAndHideAdditionalElement();