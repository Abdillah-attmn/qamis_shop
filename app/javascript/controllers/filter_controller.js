import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter"
export default class extends Controller {
  submit(event) {
    this.element.requestSubmit()
  }
}
