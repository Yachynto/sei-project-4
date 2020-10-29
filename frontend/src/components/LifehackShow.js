//! No more needed, everything is happening in LifehackCard
// import React, { Component } from 'react'
// // import { Link } from 'react-router-dom'

// import { getSingleLifehack, deleteLifehack } from '../lib/api'

// class LifehackShow extends Component {
//   state = {
//     lifehack: null
//   }

//   async function() {
//     const lifehackId = this.props.match.params.id
//     const response = await getSingleLifehack(lifehackId)
//     this.setState({
//       lifehack: response
//     })
//     console.log(this.state.lifehack)
//   }

//   handleDelete = async () => {
//     const lifehackId = this.props.match.params.id
//     await deleteLifehack(lifehackId)
//     this.props.history.push('/')
//   }

//   render() {
//     const lifehack = this.state.lifehack
//     if ( !lifehack ) return null
//     return (
//       <section className="section">
//         <div className="container">
//           <div className="columns">
//             <div className="column is-half">
//               <figure className="image">
//                 <img src={lifehack.data.image} alt={lifehack.data.name} />
//               </figure>
//             </div>
//             <div className="column is-half">
//               <h4 className="title is-4">
//                 <span role="img" aria-label="plate">🍽 </span>
//                 What does it do?
//               </h4>
//               <p>{lifehack.data.text}</p>
//               {/* <hr />
//               <h4 className="title is-4">
//                 <span role="img" aria-label="plate">🌍 </span>
//                 Origin
//               </h4>
//               <hr />
//               <p>dfsf{lifehack.data.category.id}</p> */}
//               <hr />
//               <h4 className="title is-4">
//                 <span role="img" aria-label="plate">🖐 </span>
//                 Added By
//               </h4>
//               <hr />
//               {/* <div>
//                 <Link to={`/cheeses/${lifehack._id}/edit`} className="button is-warning">Edit</Link>
//                 <hr />
//                 <button onClick={this.handleDelete} className="button is-danger">Delete</button>
//               </div> */}
//               <p>{lifehack.data.owner.username}</p>
//               <hr />
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default LifehackShow