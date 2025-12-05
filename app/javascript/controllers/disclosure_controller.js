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
    const sectionId = event.currentTarget.getAttribute("commandfor")
    const section = document.getElementById(sectionId)

    // Toggle de la section
    section.classList.toggle("hidden");

    // Gestion des icônes plus/moins

    if (section.classList.contains("hidden")) {
      this.plusTarget.classList.remove("hidden");
      this.moinsTarget.classList.add("hidden");

    } else {
      this.plusTarget.classList.add("hidden");
      this.moinsTarget.classList.remove("hidden");
    }
  }
}
