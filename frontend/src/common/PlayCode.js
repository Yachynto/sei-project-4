import React from 'react'

const PlayCode = () => {

  return (
    <div className="box">
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src='https://cdn.pocket-lint.com/r/s/660x/assets/images/137775-gadgets-news-feature-20-crazy-inventions-you-won-t-believe-what-you-re-about-to-see-image14-aPmiI7jNQ4-jpg.webp?v1' alt=""/>
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">
                <span role="img" aria-label="plate">🍽 </span>
                What does it do?
              </h4>
              {/* <hr />
              <h4 className="title is-4">
                <span role="img" aria-label="plate">🌍 </span>
                Origin
              </h4>
              <hr />
              <p>dfsf{lifehack.data.category.id}</p> */}
              <hr />
              <h4 className="title is-4">
                <span role="img" aria-label="plate">🖐 </span>
                Added By
              </h4>
              <hr />
              {/* <div>
                <Link to={`/cheeses/${lifehack._id}/edit`} className="button is-warning">Edit</Link>
                <hr />
                <button onClick={this.handleDelete} className="button is-danger">Delete</button>
              </div> */}
              <hr />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default PlayCode