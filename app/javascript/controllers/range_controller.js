import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="range"
export default class extends Controller {
  connect() {
  }
  static targets = ["min", "max", "minOutput", "maxOutput"]

  update() {
    const minValue = parseInt(this.minTarget.value)
    const maxValue = parseInt(this.maxTarget.value)

    // Empêcher que min dépasse max
    if (minValue > maxValue) {
      this.minTarget.value = maxValue
    }

    this.minOutputTarget.textContent = this.minTarget.value + " €"
    this.maxOutputTarget.textContent = this.maxTarget.value + " €"

    // Soumettre automatiquement le formulaire parent
    this.element.closest("form").requestSubmit()
  }
}
