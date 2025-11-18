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
}
