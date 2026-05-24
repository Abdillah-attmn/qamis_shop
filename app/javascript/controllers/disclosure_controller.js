import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="disclosure"
export default class extends Controller {
  static targets = ["content", "plus", "moins"]

  connect() {
    // console.log("Disclosure controller connected")
  }

  // Méthode pour le menu Prix
  priceDisclosureMenu(event){
    this.#toggleMenu(event);
  }

  // Méthode pour le menu Catégorie
  categoryDisclosureMenu(event){
    this.#toggleMenu(event);
  }

  #toggleMenu(event){
    // Détection de l'élément ciblé
    const index = event.currentTarget.dataset.index
    const section = this.contentTargets[index]
    const plus = this.plusTargets[index]
    const moins = this.moinsTargets[index]

    // Toggle de la section
    section.classList.toggle("hidden");

    // Gestion des icônes plus/moins

    if (section.classList.contains("hidden")) {
      plus.classList.remove("hidden");
      moins.classList.add("hidden");

    } else {
      plus.classList.add("hidden");
      moins.classList.remove("hidden");
    }
  }
}
