import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="disclosure"
export default class extends Controller {
  static targets = ["content", "plus", "moins"]

  connect() {
    // console.log("Disclosure controller connected")
  }

  toggle() {
    this.contentTarget.classList.toggle("hidden")
    this.plusTarget.classList.toggle("hidden")
    this.moinsTarget.classList.toggle("hidden")
  }

  categoryDisclosureMenu(){
    this.contentTarget.classList.toggle("hidden");
    this.#checkMenu();
  }

  #checkMenu(){
    if (this.contentTarget.classList.contains("hidden")) {
      this.plusTarget.classList.remove("hidden");
      this.moinsTarget.classList.add("hidden");

    } else {
      this.plusTarget.classList.add("hidden");
      this.moinsTarget.classList.remove("hidden");
    }
  }

  // Function which update aria-expanded
  #toggleAriaExpanded() {
    const isExpanded = this.menuTarget.classList.contains("hidden");
    this.element.setAttribute("aria-expanded", !isExpanded);
  }
}
