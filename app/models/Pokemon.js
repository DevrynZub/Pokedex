
export class Pokemon {
  constructor(data) {
    this.id = data.id || ''
    this.name = data.name
    this.sprites = data.sprites.other.home.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }

  get CardTemplate() {
    return `
    <div class="col-10 m-auto mb-3">
      <section class="row">
        <div class="col-12 col-md-4 p-0">
          <img class="img-fluid house-img"
            src="${this.sprites}" 
            alt="${this.name}">
            </div>
            <div class="col-12 p-3">
            <h2>${this.name}</h2>
            <p>Weight: ${this.weight}lbs Height: ${this.height}</p>
            <h4>${this.types}</h4>
        </div>
      </section>
    </div>
    `
  }

}



