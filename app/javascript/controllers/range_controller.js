import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="range"
export default class extends Controller {
  connect() {
  }
  static targets = ["min", "max", "minOutput", "maxOutput", "track"]
  static minGap = 5; // Valeur minimale de l'écart entre min et max

  update() {
    let minValue = parseInt(this.minTarget.value)
    let maxValue = parseInt(this.maxTarget.value)

    // Empêcher que min dépasse max
    if (maxValue - minValue < this.constructor.minGap) {
      if (event.target === this.minTarget) {
        this.minTarget.value = maxValue - this.constructor.minGap
        minValue = maxValue - this.constructor.minGap
      } else {
        this.maxTarget.value = minValue + this.constructor.minGap
        maxValue = minValue + this.constructor.minGap
      }
    }

    this.minOutputTarget.textContent = this.minTarget.value + " "
    this.maxOutputTarget.textContent = this.maxTarget.value + " €"

    // Mettre à jour la barre du slider
    const track = this.trackTarget;
    const minPercent = ((minValue - 30) / (80 - 30)) * 100;
    const maxPercent = ((maxValue - 30) / (80 - 30)) * 100;
    track.style.left = minPercent + "%";
    track.style.width = (maxPercent - minPercent) + "%";

    // Soumettre automatiquement le formulaire parent
    this.element.closest("form").requestSubmit()
  }
}
